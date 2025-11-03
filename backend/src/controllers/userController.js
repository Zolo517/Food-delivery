import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10); //password , her ih davslah too

    const user = await User.create({
      email,
      password: hashedPassword,
    });
    if (email === user.email) {
      res
        .status(403)
        .send({ message: "eamil is already registered", data: user });
    }
    res.status(200).send({ message: "success", data: user });
  } catch (error) {
    console.error(error);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // if (!user.length) {
    //   res.status(404).send({ message: "You have to sign up first" });
    // }
    //axiosInstance eer yaj req.bodygoos yum avj boldgiig oloh

    const isCorrectPassword = bcrypt.compareSync(password, user.password);
    const token = jwt.sign({ ...isCorrectPassword }, "key", {
      expiresIn: "1h",
    });

    if (!isCorrectPassword) {
      res.status(403).send({ message: "Wrong password", data: user });
      console.log(token, "wrong pass token");
    }
    res.status(200).send({ message: "success", data: user, token: token });
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
    const token = jwt.sign({ email: "zoz@gmail.com", pass: "121212" }, key, {
      expiresIn: "1h",
    });
    res.send({ token: token });
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
