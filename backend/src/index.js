import { configDotenv } from "dotenv";
import express, { json } from "express";
import { connectDB } from "./database/db.js";
import { CategoryRouter } from "./routers/foodCategoryRoute.js";
import { UserRouter } from "./routers/userRoute.js";

configDotenv();

const port = process.env.PORT;
const app = express();

app.use(json());

app.use("/category", CategoryRouter);
app.use("/auth", UserRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${port}/category`);
  console.log(`Server is running on http://localhost:${port}/auth/refresh`);
  console.log(
    `Server is running on http://localhost:${port}/auth/verify-reset-password-rquests`
  );
});
