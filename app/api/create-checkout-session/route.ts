import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST() {
  try {
    const key = process.env.STRIPE_SECRET_KEY;

    if (!key) {
      return new Response("❌ NO STRIPE KEY FOUND", { status: 500 });
    }

    const stripe = new Stripe(key);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: { name: "Legal Agreement" },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],
      success_url: "https://legalformat.in/success",
      cancel_url: "https://legalformat.in",
    });

    return new Response(session.url || "NO URL");

  } catch (err: any) {
    return new Response(`❌ ERROR: ${err.message}`, { status: 500 });
  }
}
