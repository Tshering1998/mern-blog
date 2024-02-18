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
//sjfs
const app = express();
app.use(express.json());
const port = 4000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

// routing the routes in main app
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
