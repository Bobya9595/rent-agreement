import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {

    const body = await req.json();

const prompt = `
You are a professional legal contract writer.

Write a clean RENT AGREEMENT for India.

Do NOT use markdown symbols like #, ##, **, or bullet symbols.

Use normal legal document formatting.

Structure:

RENT AGREEMENT

1. PARTIES
Explain landlord and tenant details.

2. PROPERTY DETAILS
Describe the property.

3. RENT TERMS
Explain rent payment details.

4. SECURITY DEPOSIT

5. AGREEMENT DURATION

6. TENANT RESPONSIBILITIES

7. LANDLORD RESPONSIBILITIES

8. TERMINATION

9. GOVERNING LAW

10. SIGNATURES

Details:

Landlord: ${body.landlord}
Tenant: ${body.tenant}
Monthly Rent: ₹${body.rent}
Property Address: ${body.address}

Write in professional legal language suitable for India.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: prompt }
      ]
    });

    const document = completion.choices[0].message.content;

    return Response.json({
      document
    });

  } catch (error) {

    console.error("AI generation error:", error);

    return new Response(
      JSON.stringify({ error: "Failed to generate document" }),
      { status: 500 }
    );
  }
}
