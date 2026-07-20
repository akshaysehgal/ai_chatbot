import express from "express";
import cors from "cors";
import chatRouter from "./routes/chat";

const app = express();

const allowedOrigin = process.env.FRONTEND_URL ?? "*";
app.use(cors({ origin: allowedOrigin }));

app.use(express.json());

app.use("/api/chat", chatRouter);

export default app;
