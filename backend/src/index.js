import { configDotenv } from "dotenv";
import express, { json } from "express";
import { connectDB } from "./database/db.js";
import { categoryRouter } from "./routers/foodCategoryRoute.js";

configDotenv();

const port = process.env.PORT;
const app = express();

app.use(json());

app.use("/category", categoryRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${port}/category`);
});
