import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST() {
  try {
    // 🔥 CHECK ENV FIRST
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("Missing STRIPE_SECRET_KEY");
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Legal Agreement",
            },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    });

    console.log("✅ SESSION CREATED:", session.url);

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
    });

  } catch (err: any) {
    console.error("❌ STRIPE ERROR FULL:", err);

    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
}
