import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { userData } = await req.json();

    // This is the "Prompt" we send to the AI
    const prompt = `You are an elite AI Fitness Coach. 
    User Name: ${userData.name}
    Goal: ${userData.goal}
    Experience Level: ${userData.level}
    
    Provide a brief, high-energy 3-sentence summary of their new training strategy.`;

    // For now, we simulate the AI response. 
    // Once you get an OpenAI/Gemini Key, we put the real call here!
    const aiSimulation = `Welcome to the team, ${userData.name}! Since we're targeting ${userData.goal} at a ${userData.level} level, I've engineered a high-frequency split to maximize your results. Get ready to transform.`;

    return NextResponse.json({ message: aiSimulation });
  } catch (error) {
    return NextResponse.json({ error: "Failed to connect to AI" }, { status: 500 });
  }
}
