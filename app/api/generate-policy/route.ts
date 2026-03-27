import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const {
      website,
      businessType,
      country,
      collectsData,
      usesCookies,
      thirdParty,
    } = await req.json();

    const prompt = `
Generate a professional Privacy Policy for:

Website Name: ${website}
Business Type: ${businessType}
Country: ${country}
Collects Personal Data: ${collectsData}
Uses Cookies: ${usesCookies}
Third-party Services: ${thirdParty}

Requirements:
- Use formal legal language
- Structure properly with headings
- Include:
  1. Introduction
  2. Information We Collect
  3. How We Use Information
  4. Cookies Policy
  5. Third-party Services
  6. Data Security
  7. User Rights
  8. Contact Information

- Make it detailed and ready to use
- Do NOT be generic
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    return NextResponse.json({
      policy: response.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error generating policy" },
      { status: 500 }
    );
  }
}
