import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express ();
dotenv.config ();

app.use (express.json ({limit: '30mb'}));
app.use (express.urlencoded ({limit: '30mb', extended: true}));

app.use (cors());
app.use ('/posts', postRoutes);
app.use ('/users', userRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect (process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then (() => {
    app.listen (PORT, () => console.log (`server is running on port:${PORT}`));
  })
  .catch (error => {
    console.log (error.message);
    mongoose.set ('useFindAndModify', false);
  });
