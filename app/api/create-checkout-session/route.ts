```ts
import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
})

export async function POST() {

  try {

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

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

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/rent-agreement-format`

    })

    return NextResponse.json({ url: session.url })

  } catch (error) {

    console.error(error)

    return NextResponse.json(
      { error: "Stripe session error" },
      { status: 500 }
    )

  }

}
```
