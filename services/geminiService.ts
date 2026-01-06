
import { GoogleGenAI } from "@google/genai";

export const generateEditorialThesis = async (productName: string, category: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    You are a poetic fashion philosopher and senior editorial strategist for RAWLINE, a brand that identifies, thrifts, and restyles vintage garments into modern slow fashion.
    
    Write a deep, 1-paragraph editorial "thesis" for a curated vintage garment named "${productName}" in the category of "${category}".
    
    Keywords for tone: Found Object, Excavation, History, Styling, Silhouette, Thrifted, Longevity, Patina, Restored, Architectural Curation.
    
    Guidelines:
    - Focus on the story of the discovery and the historical fit.
    - Mention how its survival through time proves its modern relevance.
    - Emphasize the beauty of pre-existing quality over new production.
    - Avoid all marketing buzzwords (luxury, must-have, chic, stunning).
    - Use a calm, intentional, and editorial tone.
    - Return ONLY the paragraph. No headers.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: prompt }] }],
    });
    
    return response.text?.trim() || "This found object represents a silent investigation into historical structural excellence.";
  } catch (error) {
    console.error("Gemini failed to synthesize thesis:", error);
    return "The historical intent of this discovery remains a silent investigation for this particular study.";
  }
};
