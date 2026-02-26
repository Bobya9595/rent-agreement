import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are an expert Indian legal drafting assistant. 
            Improve the given rent agreement clause in proper Indian legal format.
            Use:
            - Formal legal language
            - Proper clause numbering
            - WHEREAS structure
            - Clear structured paragraphs
            Do not add unnecessary explanation.`,
          },
          {
            role: "user",
            content: text,
          },
        ],
        temperature: 0.4,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI Error:", data);
      return NextResponse.json(
        { error: "AI generation failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      result: data.choices[0].message.content,
    });

  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
