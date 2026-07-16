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




/*


1. Make authenticatn functionality of login with github and google
2. Before setting up stripe, set up authenticatn
3. npm i stripe @stripe/stripe.js  
4. sign in stripe and cpy secret and public key from stripe dashboard and paste into env file
5. create lib/stripe.ts file to define stripe client and public key to use stripe
6. now create dynamic val of plan field and also create plan field, stripecustomerid, etc stripe field in User model inside schema.prisma
7. npx prisma migrate dev
npm prisma generate
8. Now create app/pricing where only authenticatn user can go
9. Now go to stripe and create a product inside product catalog
10. now copy product id from price.created event data
11. now create the pricing page structure
12. Create a pricing-card component and make handlesubscriptn fn and pass to btn and use it in pricing page
13. Now create api/stripe folder
14. Always working with any payment system, it can be razorpay,stripe,etc -> Always first create checkout route or checkpt and then webhooks folder
15. create api/stripe/checkout/route.js
16. inside that -> create session -> get fetch priceId from req -> find user using id from session -> create customer if not exist -> create checkout session 
Also create Next Public App Url as localhost inside env file
17. Now create webhooks route as stripe/webhook/route.ts to check or recieve events while payment happens or to listen events inside terminal
18. Search for stripe webhooks -> download stripe cli or stripe.exe from github -> extract it -> add path to env vars 
19. Now run: stripe login inside terminal -> after that signup and you will be connnected to stripe
20. Run : stripe listen --forward-to localhost:3000/api/stripe/webhooks  -> running this cmd will connnect stripe backend to project/my backend and can talk
21. It will give webhook secret and paste that into env file
22. Now create event listeners inside webhook route 
-> get body and signature from req -> create event using constructEvent() -> create switch and case statemnt to listen multiple events -> create these cases: 
checkout.session.completed(fetch session, userId,priceId,subscriptn -> then update user), customer.subscription.updated(fetch subscritpn,customer & price id, user, isActive -> then update user), 
customer.subscription.deleted(fetch subscritpn,customer id, user -> then update user)

23. Now restructure homepage or root page by adding user to handle payment and add btns for Plan & Redirect to pricing page

54+64



->  install stripe.exe from github -> setup path in env vars 



*/