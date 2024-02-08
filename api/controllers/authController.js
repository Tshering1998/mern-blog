import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  //****************Another way to create*************
  // const newUser = await User.create({
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: req.body.password,
  // });

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(errorHandler(400, "All fields are required"));
  }

  // hashing the password
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({
      status: "successful",
      data: {
        data: newUser,
      },
    });
  } catch (error) {
    next(error);
  }
};
