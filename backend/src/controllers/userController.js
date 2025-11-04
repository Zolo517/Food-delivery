import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10); //password , her ih davslah too

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

    const isCorrectPassword = bcrypt.compareSync(password, user.password);

    if (!isCorrectPassword) {
      res.status(403).send({ message: "Wrong password" });
    }
    res.status(200).send({ message: "success" });
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
