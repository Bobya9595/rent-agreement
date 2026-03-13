import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST() {

  try {

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Rent Agreement Download"
            },
            unit_amount: 1000
          },
          quantity: 1
        }
      ],

      mode: "payment",

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/rent-agreement-format`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/rent-agreement-format`
    });

    return Response.json({
      url: session.url
    });

  } catch (error) {

    console.error(error);

    return new Response("Stripe Error", { status: 500 });

  }

}
