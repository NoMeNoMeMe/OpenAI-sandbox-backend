require('dotenv').config();
const OpenAI = require('openai');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const GEMINI_BASE_URL = process.env.GEMINI_BASE_URL || "";

if (!GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is not set in the environment variables.");
    process.exit(1);
}
if (!GEMINI_BASE_URL) {
    console.error("BASE_URL is not set in the environment variables.");
    process.exit(1);
}

const openai = new OpenAI({
    apiKey: GEMINI_API_KEY,
    baseURL: GEMINI_BASE_URL,
});

module.exports = openai;