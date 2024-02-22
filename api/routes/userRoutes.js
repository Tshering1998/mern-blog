import express from "express";
import { updateUser } from "../controllers/userController.js";
import {
  deleteUser,
  signout,
  getUsers,
  getUser,
} from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signout);
router.get("/getusers", verifyToken, getUsers);
router.get("/:userId", getUser);
//router.delete("/deleteusers", verifyToken, deleteUser);

export default router;
