import express from "express";
import cors from "cors";
import Groq from "groq-sdk";

// Provide a minimal declaration for `process.env` so TypeScript won't
// error when this file is type-checked without Node typings installed.
declare const process: {
  env: {
    GROQ_API_KEY?: string;
    [key: string]: string | undefined;
  };
};

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_ROADMAP = `You are SkillBridge AI, an expert academic and career counselor for Indian students.
You provide detailed, structured, and actionable guidance.
Format your response clearly with:
- Use ## for main section headings
- Use ### for subsections
- Use numbered lists for sequential steps
- Use bullet points for tips and resources
- Include specific timelines, subject names, and actionable advice
- Keep Indian education system context (CBSE, SSC, JEE, MHT-CET, etc.)
Keep your response thorough but focused — aim for 400-600 words.`;

const SYSTEM_ASK = `You are SkillBridge AI, a knowledgeable and empathetic career and academic counselor for Indian students.
Answer student questions with clear, direct, and actionable advice specific to the Indian education system.
Format using ## headings, bullet points, and numbered steps where helpful.
Keep answers between 200-400 words.`;

app.post("/api/generate", async (req, res) => {
  const { prompt, label } = req.body;
  if (!prompt) { res.status(400).json({ error: "prompt is required" }); return; }
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_ROADMAP },
        { role: "user", content: `${prompt}${label ? ` (for: ${label})` : ""}` },
      ],
      max_tokens: 2048,
    });
    res.json({ response: completion.choices[0]?.message?.content ?? "" });
  } catch (err) {
    console.error("Groq generate error:", err);
    res.status(500).json({ error: "Failed to generate roadmap. Check your GROQ_API_KEY." });
  }
});

app.post("/api/ask", async (req, res) => {
  const { question } = req.body;
  if (!question) { res.status(400).json({ error: "question is required" }); return; }
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_ASK },
        { role: "user", content: question },
      ],
      max_tokens: 1024,
    });
    res.json({ response: completion.choices[0]?.message?.content ?? "" });
  } catch (err) {
    console.error("Groq ask error:", err);
    res.status(500).json({ error: "Failed to get answer. Check your GROQ_API_KEY." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
  if (!process.env.GROQ_API_KEY) console.warn("⚠️  GROQ_API_KEY not set!");
});