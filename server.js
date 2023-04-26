import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

//config
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//port
const PORT = process.env.PORT || 8080;

//running listen
app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white
  );
});

//through node = npm start
//through nodemon so that changes will be appeared directly = npm run server
//client folder -> then run -> npm start
