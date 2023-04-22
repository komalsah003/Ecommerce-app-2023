import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

//config
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//port
const PORT = process.env.PORT || 8080;

//running listen
app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on ${PORT}`.bgGreen.white
  );
});

//through node = npm start
//through nodemon so that changes will be appeared directly = npm run server
