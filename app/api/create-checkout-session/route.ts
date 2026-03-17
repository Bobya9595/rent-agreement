import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST() {
  try {
    const key = process.env.STRIPE_SECRET_KEY;

    if (!key) {
      return new Response(
        JSON.stringify({ error: "NO_KEY_FOUND" }),
        { status: 500 }
      );
    }

    if (!key.startsWith("sk_")) {
      return new Response(
        JSON.stringify({ error: "INVALID_KEY_FORMAT" }),
        { status: 500 }
      );
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

    return Response.json({ url: session.url });

  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
}
