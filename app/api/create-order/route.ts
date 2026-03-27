import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST() {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
      amount: 14900, // ₹149
      currency: "INR",
      receipt: "receipt_order_1",
    });

    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating order" },
      { status: 500 }
    );
  }
}
