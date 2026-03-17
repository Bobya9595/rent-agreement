import Razorpay from "razorpay";

export const runtime = "nodejs";

export async function POST() {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
      amount: 1000, // ₹10 (in paise)
      currency: "INR",
      receipt: "legalformat_order",
    });

    return Response.json(order);

  } catch (error: any) {
    console.error("RAZORPAY ERROR:", error);

    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
