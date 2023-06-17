import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieSession from "cookie-parser";
import { errorMiddleware,errorHandle } from "./middleware/errorMiddleware.js";
import baseRoute from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.development" });

const app = express();

app.use(cors({
    origin: "*",
    credentials: true       //cliend can use automate cookie
}));
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieSession());

app.use("/api", baseRoute);
app.all("*", (req, res, next) => {
    next(errorHandle("api ไม่อยู่ในระบบ", 404));
});
app.use(errorMiddleware);

export default app;