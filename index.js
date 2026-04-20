const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Сервер работает 🚀");
});

// 🔥 новый endpoint
app.post("/ai", async (req, res) => {
  try {
    const userInput = req.body.text;

    // пока просто тест
    res.json({
      success: true,
      message: "Запрос получен",
      input: userInput
    });

  } catch (error) {
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started");
});
