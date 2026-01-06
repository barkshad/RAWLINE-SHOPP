
import { GoogleGenAI } from "@google/genai";

export const generateEditorialThesis = async (productName: string, category: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    You are a poetic fashion philosopher and senior editorial strategist for RAWLINE Maison d'Archive, a high-luxury Kenyan fashion house based in Nairobi.
    The brand specializes in identifying historical vintage fits from Nairobi markets (Gikomba, Eastleigh) and coastal archives (Mombasa), then architectural restructuring them into modern luxury silhouettes.
    
    Write a deep, 1-paragraph editorial "thesis" for a structural garment named "${productName}" in the category of "${category}".
    
    Keywords for tone: Nairobi Archive, Historical Integrity, Identification, Found & Restored, Structural Rescue, Architectural Silhouette, Rift Valley, Gikomba Discovery, Heritage, Curation.
    
    Guidelines:
    - Focus on the story of the *identification* (finding the vintage piece) and its Maison refinement.
    - Mention the Kenyan historical context or the "soul" of the found object.
    - Use a calm, intentional, and editorial tone.
    - Avoid all marketing buzzwords (must-have, chic, stunning, fashionista).
    - Return ONLY the paragraph. No headers.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: prompt }] }],
    });
    
    return response.text?.trim() || "This structural inquiry represents a silent investigation into the identified historical excellence found within our Nairobi archives.";
  } catch (error) {
    console.error("Gemini failed to synthesize thesis:", error);
    return "The historical intent of this discovery remains a silent investigation for this particular study.";
  }
};
