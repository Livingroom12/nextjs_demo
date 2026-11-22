import { NextResponse } from "next/server";

const quotes = [
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger Dijkstra" },
  { text: "Programs must be written for people to read.", author: "Harold Abelson" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
];

// Needed so every request returns a fresh random quote.
export const dynamic = "force-dynamic";

export async function GET() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  return NextResponse.json(random);
}   