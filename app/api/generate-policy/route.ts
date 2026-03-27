import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { website, businessType, country } = await req.json();

    const prompt = `
Generate a detailed, professional Privacy Policy for:

Website: ${website}
Business Type: ${businessType}
Country: ${country}

Requirements:
- Minimum 1800–2500 words
- Write like a legal professional
- No placeholders like [Insert]
- Use real structured content
- Use numbered headings (1, 2, 3...)

Include ALL sections:

1. Introduction  
2. Information We Collect  
3. How We Use Information  
4. Cookies Policy  
5. Third-party Services  
6. Data Security  
7. User Rights  
8. Data Retention  
9. International Transfers  
10. Children's Privacy  
11. Governing Law  
12. Changes to Policy  
13. Contact Information  

Make it detailed, structured, and ready for real business use.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    return NextResponse.json({
      policy: response.choices[0].message.content,
    });
  } catch {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
