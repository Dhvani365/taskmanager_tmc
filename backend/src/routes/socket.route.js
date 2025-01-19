import SocketController from "../controllers/socket.controller.js";

const setupSocketEvents = (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);

    // Register a user
    socket.on("register", (userId) => {
      SocketController.registerUser(socket, userId);
    });

    // Handle message sending
    socket.on("send-message", (messageData) => {
      SocketController.handleMessage(io, messageData);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      SocketController.handleDisconnect(socket);
    });
  });
};

export default setupSocketEvents;
