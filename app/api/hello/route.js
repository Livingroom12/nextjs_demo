import { NextResponse } from "next/server";

// GET /api/hello?name=Asha
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "friend";

  return NextResponse.json({
    message: `Hello, ${name}!`,
    time: new Date().toISOString(),
  });
}