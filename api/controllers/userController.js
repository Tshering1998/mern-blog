import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import User from "../models/userModel.js";
export const test = (req, res) => {
  res.json({ message: "API" });
};

export const updateUser = async (req, res, next) => {
  //checking the user id from url and cookie
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this user"));
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, "Password must be at least 6 characters"));
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  if (req.body.username) {
    if (req.body.username.length > 7 || req.body.username.length > 20) {
      return next(
        errorHandler(400, "Username must between 7 and 20 character")
      );
    }
    if (req.body.usernameincludes(" ")) {
      return next(errorHandler(400, "Username cannot contain the spaces"));
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(errorHandler(400, "No special character"));
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            profilePicture: req.body.profilePicture,
            password: req.body.password,
          },
        },
        { new: true }
      );
      const { password, ...rest } = updateUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  }
};
