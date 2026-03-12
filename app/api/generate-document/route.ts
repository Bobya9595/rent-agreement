import OpenAI from "openai";
import { ratelimit } from "../../../lib/ratelimit";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    // Rate limit by IP
    const ip = req.headers.get("x-forwarded-for") ?? "anonymous";

    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429 }
      );
    }

    const body = await req.json();

    const prompt = `
Create a professional Rent Agreement for India.

Landlord: ${body.landlord}
Tenant: ${body.tenant}
Monthly Rent: ₹${body.rent}
Property Address: ${body.address}

Include sections:
1. Introduction
2. Rent Terms
3. Security Deposit
4. Agreement Duration
5. Responsibilities of Tenant
6. Responsibilities of Landlord
7. Termination Clause
8. Governing Law

Write it as a proper legal contract.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const document = completion.choices[0].message.content;

    return Response.json({ document });

  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({ error: "Failed to generate document" }),
      { status: 500 }
    );
  }
}
