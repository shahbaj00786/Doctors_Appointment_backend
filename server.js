import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import { adminRouter } from "./routes/adminRouter.js";
import dotenv from "dotenv";
import doctorRouter from "./routes/doctorRouter.js";
import userRouter from "./routes/userRouter.js";
dotenv.config();

const cors = require('cors');

app.use(cors({
  origin: 'https://doctors-appointment-frontend-eta.vercel.app', // frontend URL
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  credentials: true
}));

// Also handle OPTIONS preflight
app.options('*', cors());


//app config
const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use(cors());

connectDB();
connectCloudinary();

//api endpoints
app.use("/api/admin", adminRouter);
app.use('/api/doctor', doctorRouter)
app.use("/api/user", userRouter)

app.listen(port, () => {
  console.log("server started", port);
});

