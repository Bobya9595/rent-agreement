
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export async function POST() {
  try {

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe key missing" },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Rent Agreement Download",
            },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/rent-agreement-format`,
    });

    return NextResponse.json({ url: session.url });

  } catch (error) {

    console.error("Stripe Error:", error);

    return NextResponse.json(
      { error: "Stripe checkout failed" },
      { status: 500 }
    );

  }
}

