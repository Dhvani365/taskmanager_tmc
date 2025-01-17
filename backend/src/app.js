import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
import {connectDb} from "./lib/db.js"
 
dotenv.config({path : '../.env'});
const PORT = process.env.PORT
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
  } ));
app.use(express.json());

app.use("/api/auth",authRoutes);
 



app.listen(PORT, () => {
    connectDb()
    console.log("Server Running on Port: " + PORT)
});