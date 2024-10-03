import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = "AIzaSyCNwIBXgTdwACnQNe3jP7tZLvATg6jPPlo";
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY!);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  export const chatSession = model.startChat({
    generationConfig: generationConfig,
    history: [],
  });