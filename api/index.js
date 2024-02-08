import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
const port = 3000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
