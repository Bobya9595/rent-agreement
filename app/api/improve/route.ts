export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return Response.json(
        { error: "No agreement text provided." },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
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
              content:
                "You are a professional Indian legal drafting assistant. Improve this rent agreement to a 2026 India-standard format. Add strong clauses including jurisdiction, indemnity, maintenance, inspection rights, dispute resolution, termination protection, force majeure, and governing law. Keep all provided details intact and enhance professionalism.",
            },
            {
              role: "user",
              content: text,
            },
          ],
          temperature: 0.4,
        }),
      }
    );

    if (!response.ok) {
      return Response.json(
        { error: "OpenAI API request failed." },
        { status: 500 }
      );
    }

    const data = await response.json();

    const improvedText =
      data.choices?.[0]?.message?.content || "AI failed to enhance text.";

    return Response.json({
      result: improvedText,
    });
  } catch (error) {
    return Response.json(
      { error: "Server error during AI enhancement." },
      { status: 500 }
    );
  }
}
