import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST() {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "usd", // ✅ IMPORTANT FIX
            product_data: {
              name: "Legal Agreement Download",
            },
            unit_amount: 100, // $1
          },
          quantity: 1,
        },
      ],

      success_url: "https://legalformat.in/success",
      cancel_url: "https://legalformat.in",
    });

    return Response.json({ url: session.url });

  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
