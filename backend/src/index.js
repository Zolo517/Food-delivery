import { configDotenv } from "dotenv";
import express, { json } from "express";

configDotenv();
const port = process.env.PORT;
const app = express();

app.use(json());

app.get("/api/hello", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
