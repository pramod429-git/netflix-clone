import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize API with your key from environment variables
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_APIKEY);

export default genAI; //basically gives a helper function to access gemini api
