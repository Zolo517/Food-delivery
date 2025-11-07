import { configDotenv } from "dotenv";
import express, { json } from "express";
import { connectDB } from "./database/db.js";
import { CategoryRouter } from "./routers/category.route.js";
import { UserRouter } from "./routers/user.route.js";
import { FoodRouter } from "./routers/food.route.js";
import { OrderRouter } from "./routers/order.route.js";
import cors from "cors";

configDotenv();

const port = process.env.PORT;
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(json());

app.use("/category", CategoryRouter);
app.use("/auth", UserRouter);
app.use("/food", FoodRouter);
app.use("/food-order", OrderRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${port}/category`);
  console.log(`Server is running on http://localhost:${port}/auth/refresh`);
  console.log(
    `Server is running on http://localhost:${port}/auth/verify-reset-password-rquests`
  );
});
