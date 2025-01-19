const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Replace with your frontend's URL
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

let usersOfProject2 = [
  {
    id: "member1",
    name: "Ramesh",
  },
  {
    id: "member2",
    name: "Nitin",
  },
  {
    id: "member3",
    name: "Piyush",
  }
]
let usersOfProject1 = [
  {
    id: "member1",
    name: "Jiya",
  },
  {
    id: "member2",
    name: "Priya",
  },
  {
    id: "member3",
    name: "Riya",
  },
],

io.on("connection", (socket) => {
  console.log("New client connected: ", socket.id);

  // Store the user and their socket ID
  socket.on("register", (userId) => {
    users[userId] = socket.id;
    console.log(`User ${userId} registered with socket ID ${socket.id}`);
  });

  // Listen for messages
  socket.on("send-message", (messageData) => {
    const { sender, receiver, content, timestamp } = messageData;

    // Ensure message is sent to the receiver only
    if (users[receiver]) {
      io.to(users[receiver]).emit("receive-message", messageData); // Send the message to the receiver's socket
    }
  });

  // Clean up user on disconnect
  socket.on("disconnect", () => {
    // Remove user from the tracking object
    for (let userId in users) {
      if (users[userId] === socket.id) {
        delete users[userId];
      }
    }
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
