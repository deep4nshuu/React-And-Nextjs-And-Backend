import { stripeClient } from "@/lib/stripe";
import {prisma} from '@/lib/db'
import { STRIPE_PRICE_IDS } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth-guard";


export async function POST(request: NextRequest){
    try {
        const session = await requireAuth()

        if(!session){
            return NextResponse.json({error: "Unauthorized"}, {status: 401})
        }

        const {priceId} = await request.json()

        if(!priceId){
            return NextResponse.json(
                {error: "Price ID is required"},
                {status: 401}
            )
        }

        const user = await prisma.user.findUnique({
            where: {
                id: session.user.id
            }
        })

        if(!user){
            return NextResponse.json({error: "User not found"}, {status: 404})
        }

        let customerId = user.stripeCustomerId;

        if(!customerId){
            const customer = await stripeClient.customers.create({
                email: user.email,
                metadata: {
                    userId: user.id
                }
            })

            customerId = customer.id;

            await prisma.user.update({
                where:{id: user.id},
                data: {
                    stripeCustomerId: customerId
                }
            })
        }

        const resolvedPriceId = STRIPE_PRICE_IDS[priceId as keyof typeof STRIPE_PRICE_IDS];

        const checkoutSession = await stripeClient.checkout.sessions.create({
            customer: customerId,
            payment_method_types: ['card'],
            line_items: [
                {
                    price: resolvedPriceId,
                    quantity: 1
                }
            ],
            mode: 'subscription',
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
            metadata: {
                userId: user.id,
                priceId: resolvedPriceId   // ⬅ now the ACTUAL Stripe price ID, matches STRIPE_PRICE_IDS.premium
            }
        })

        return NextResponse.json({url:checkoutSession.url})

    } catch (error) {
        console.log("Checkout error:", error);
        return NextResponse.json(
            {error: "An error occured while creating the checkout session"},
            {status: 500}
        )
    }
}


