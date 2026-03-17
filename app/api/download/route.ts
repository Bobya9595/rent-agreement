export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text");
  const type = searchParams.get("type");

  if (!text) {
    return new Response("No content", { status: 400 });
  }

  if (type === "word") {
    return new Response(text, {
      headers: {
        "Content-Type": "application/msword",
        "Content-Disposition": "attachment; filename=agreement.doc",
      },
    });
  }

  return new Response(text, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=agreement.pdf",
    },
  });
}
