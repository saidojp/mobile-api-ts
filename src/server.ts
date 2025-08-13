import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("kill yourself");
});

app.listen(port, () => {
  console.log(`oneni aim on http://localhost:${port}`);
});
