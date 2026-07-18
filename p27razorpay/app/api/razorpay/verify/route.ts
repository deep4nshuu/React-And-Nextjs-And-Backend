import { requireAuth } from "@/lib/auth-guard";
import { NextRequest, NextResponse } from "next/server";
import crypto from 'crypto'
import {prisma} from '@/lib/db'
import { success } from "better-auth";

export async function POST(request: NextRequest){
    try {
        const session = await requireAuth()

        if(!session){
            return NextResponse.json({
                success: false,
                message: "Unauthorized"
            }, {status: 401})
        }

        const body = await request.text()
        const data = JSON.parse(body)

        const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = data;

        const secret = process.env.RAZORPAY_KEY_SECRET!;
        const generatedSignature = crypto
            .createHmac('sha256', secret)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        if(generatedSignature !== razorpay_signature){
            return NextResponse.json({
                success: false,
                message: "Payment verificatn failed"
            }, {status: 400});
        }

        await prisma.user.update({
            where: {
                id: session?.user.id
            },
            data: {
                plan: 'PRO'
            }
        })

        return NextResponse.json({
            success: true,
            message: "Payment successful and user updated!"
        })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Failed to create order"
        }, {status: 500})
    }
}