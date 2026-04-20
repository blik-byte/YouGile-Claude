const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors()); // 🔥 ВОТ ЭТО ВАЖНО
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Сервер работает 🚀");
});

app.post("/ai", async (req, res) => {
  const userInput = req.body.text;

  res.json({
    success: true,
    input: userInput
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started");
});
