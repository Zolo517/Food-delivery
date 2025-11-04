import { Router } from "express";
import {
  getRefreshedData,
  getVerifyResetPassReq,
  login,
  resetPassword,
  resetPasswordReq,
  signup,
} from "../controllers/userController.js";
import { verifytoken } from "../middleware/auth.js";

export const UserRouter = Router();

UserRouter.post("/sign-up", signup)
  .post("/sign-in", login)
  .post("/reset-password-request", resetPasswordReq)
  .post("/reset-password", resetPassword)
  .get("/refresh", getRefreshedData)
  .get("/verify-reset-password-request", verifytoken, getVerifyResetPassReq);
