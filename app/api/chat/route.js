import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { userData } = await req.json();

    // This is where we will eventually call the real AI.
    // For now, we'll simulate the AI logic.
    const aiResponse = `Based on your goal to ${userData.goal}, 
    as a ${userData.level} athlete, I recommend a 4-day split 
    focusing on progressive overload.`;

    return NextResponse.json({ message: aiResponse });
  } catch (error) {
    return NextResponse.json({ error: "AI failed to think" }, { status: 500 });
  }
}
