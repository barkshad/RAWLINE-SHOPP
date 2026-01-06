
import { GoogleGenAI } from "@google/genai";

export const generateEditorialThesis = async (productName: string, category: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    You are a poetic fashion philosopher and senior editorial strategist for RAWLINE, a brand that celebrates raw structural honesty and architectural minimalism.
    
    Write a deep, 1-paragraph editorial "thesis" for a garment named "${productName}" in the category of "${category}".
    
    Keywords for tone: Architectural, Muslin, Draft, Silence, Construction, Geometry, Unfinished, Longevity, Restraint.
    
    Guidelines:
    - Focus on the logic of the blueprint and the physical reality of the material.
    - Mention the beauty of visible construction or "intentional drafts".
    - Avoid all marketing buzzwords (luxury, must-have, chic, stunning).
    - Use a calm, intentional, and editorial tone.
    - Return ONLY the paragraph. No headers.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ parts: [{ text: prompt }] }],
    });
    
    return response.text?.trim() || "The architectural logic of this piece is best understood through its structural restraint.";
  } catch (error) {
    console.error("Gemini failed to synthesize thesis:", error);
    return "The architectural intent remains a silent investigation for this particular study.";
  }
};
