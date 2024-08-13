import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//app.use is used for configuration

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

//params url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//public is folder name
app.use(express.static("public"));

app.use(cookieParser());

export default app;
