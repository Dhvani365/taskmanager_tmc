import SocketModel from "../models/socket.model.js";

const SocketController = {
  registerUser(socket, userId) {
    SocketModel.addUser(userId, socket.id);
    console.log(`User ${userId} registered with socket ID ${socket.id}`);
  },

  handleMessage(io, messageData) {
    const { sender, receiver, content, timestamp } = messageData;
    const receiverSocketId = SocketModel.getSocketId(receiver);

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("receive-message", messageData);
      console.log(`Message from ${sender} to ${receiver}: ${content}`);
    } else {
      console.log(`Receiver ${receiver} is not connected.`);
    }
  },

  handleDisconnect(socket) {
    const userId = SocketModel.removeUser(socket.id);
    if (userId) {
      console.log(`User ${userId} disconnected.`);
    }
  },
};

export default SocketController;
