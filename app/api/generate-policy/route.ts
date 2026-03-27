import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { website } = body;

    // Validation
    if (!website) {
      return NextResponse.json(
        { error: "Website name is required" },
        { status: 400 }
      );
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // ✅ PRODUCTION PROMPT
    const prompt = `
You are a professional legal expert specializing in Indian digital law.

Generate a Privacy Policy for:

Website Name: ${website}
Country: India

Requirements:
- Use formal legal language
- Structure with proper headings
- Include:
  1. Introduction
  2. Information Collection
  3. Use of Information
  4. Cookies
  5. Data Sharing
  6. Security
  7. User Rights
  8. Changes to Policy
  9. Contact Information

- Make it website-ready
- Do not use placeholders
- Keep it professional and clean
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const policy =
      response.choices?.[0]?.message?.content ||
      "Unable to generate policy";

    return NextResponse.json({ policy });
  } catch (error: any) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
