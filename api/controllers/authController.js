import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  //Another way to create
  // const newUser = await User.create({
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: req.body.password,
  // });

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

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
    res.status(500).json({
      status: "unsuccesful",
    });
  }
};
