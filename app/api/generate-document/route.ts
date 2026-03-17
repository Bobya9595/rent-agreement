import OpenAI from "openai";

export async function POST(req: Request) {
  const body = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `
Create a professional Indian Rent Agreement with:

Landlord: ${body.landlord}
Tenant: ${body.tenant}
Rent: ${body.rent}
Deposit: ${body.deposit}
Address: ${body.address}
Duration: ${body.duration}
Rules: ${body.rules}

Include:
- Parties
- Property details
- Rent clause
- Deposit clause
- Terms & conditions
- Signature section
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return Response.json({
    document: response.choices[0].message.content,
  });
}
