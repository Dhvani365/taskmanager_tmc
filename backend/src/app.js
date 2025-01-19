import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

import authRoutes from "./routes/auth.route.js";
import memberRoutes from "./routes/member.route.js";
import taskRoutes from "./routes/task.route.js";
import setupSocketEvents from "./routes/socket.route.js";
import { connectDb } from "./lib/db.js";

dotenv.config({ path: "../.env" });
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // Your frontend URL
  credentials: true,
}));
app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/member", memberRoutes);
app.use("/api/task", taskRoutes);

// Create an HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Your frontend URL
    methods: ["GET", "POST"],
  },
});

// Setup Socket.IO events
setupSocketEvents(io);

// Start the server
server.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on http://localhost:${PORT}`);
});
