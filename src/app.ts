import "dotenv/config";
import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";

import { router } from "./routes";

const app = express();
app.use(cors());

const serverHttp = http.createServer(app);

const socketIo = new Server(serverHttp, {
  cors: {
    origin: "*"
  }
});

socketIo.on("connection", socket =>{
  console.log(`Usuario conectado no socket ${socket.id}`);
});

// Accept JSON in the body of POST requests
app.use(express.json())

app.use(router);

export {serverHttp, socketIo};