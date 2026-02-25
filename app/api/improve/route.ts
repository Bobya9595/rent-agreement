import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({
    message: "API working correctly",
    received: body,
  });
}
