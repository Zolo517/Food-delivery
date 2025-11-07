import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10); //password , her ih davslah too
    if (!email || !password) {
      res.status().send({ message: "email and password are required" });
    }
    const user = await User.create({
      email,
      password: hashedPassword,
    });
    res.status(200).send({ message: "success", data: user });
  } catch (error) {
    console.error(error);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      res.status(404).send({ message: "You have to sign up first" });
    }
    //axiosInstance eer yaj req.bodygoos yum avj boldgiig oloh
    console.log(password, "req.body");
    console.log(user.password, "hashed password");
    const isCorrectPassword = bcrypt.compareSync(password, user.password);
    console.log(isCorrectPassword, "correct pass");

    const token = jwt.sign({ ...isCorrectPassword }, "key", {
      expiresIn: "1h",
    });

    if (!isCorrectPassword) {
      res.status(403).send({ message: "Email or password is incorrect." });
    }
    res
      .status(200)
      .send({ message: "Successfully logged in", data: user, token: token });
    console.log(token, "success token");
  } catch (error) {
    console.error(error);
  }
};
export const resetPasswordReq = async (req, res) => {
  try {
    const data = await User.create();
    res.status(200).send({ message: "created successfully", data: data });
  } catch (error) {
    console.error(error);
  }
};
export const resetPassword = async (req, res) => {
  try {
    const data = await User.create();
    res.status(200).send({ message: "created successfully", data: data });
  } catch (error) {
    console.error(error);
  }
};
export const getRefreshedData = async (req, res) => {
  try {
  } catch (error) {
    console.error(error, "error");
  }
};

export const getVerifyResetPassReq = async (req, res) => {
  try {
  } catch (error) {
    console.error(error, "error");
  }
};
