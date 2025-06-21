import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (_, res) => {
  res.send("Hello from API!");
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
