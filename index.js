const express = require("express");
const cors = require("cors");
require("dotenv").config();

const Anthropic = require("@anthropic-ai/sdk");

const app = express();

app.use(cors());
app.use(express.json());

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

app.get("/", (req, res) => {
  res.send("Сервер работает 🚀");
});

app.post("/ai", async (req, res) => {
  try {
    const userInput = req.body.text;

    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 300,
      messages: [
        {
          role: "user",
          content: userInput
        }
      ]
    });

    const aiText = response.content[0].text;

    res.json({
      success: true,
      ai: aiText
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started");
});
