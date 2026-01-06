
import { GoogleGenAI } from "@google/genai";

export const generateEditorialThesis = async (productName: string, category: string): Promise<string> => {
  // Initialization strictly following the requirement for process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    You are a poetic fashion philosopher and senior brand strategist for RAWLINE.
    RAWLINE is a brand that celebrates raw ideas, first drafts, and the honesty of construction. 
    It is architectural, minimalist, and intellectual.
    
    Write a deep, 1-paragraph editorial "thesis" for a new garment called "${productName}" in the category of "${category}".
    
    Guidelines:
    - Focus on the logic of the blueprint and the physical reality of the material.
    - Mention the beauty of visible seams, raw hems, or the "unpolished" beginning.
    - Avoid marketing buzzwords (e.g., "stunning", "must-have", "luxury").
    - Use a calm, intentional, and editorial tone.
    - Treat the garment as a structural study, not a fashion item.
    
    Return only the paragraph.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ parts: [{ text: prompt }] }],
    });
    
    return response.text || "The process remains silent for this piece.";
  } catch (error) {
    console.error("Gemini AI failed to resonate:", error);
    return "The architectural intent of this piece is best understood through physical contact.";
  }
};
