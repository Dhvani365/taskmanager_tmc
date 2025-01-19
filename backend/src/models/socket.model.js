const socketConnections = {}; // In-memory storage for simplicity

const SocketModel = {
  addUser(userId, socketId) {
    socketConnections[userId] = socketId;
  },

  removeUser(socketId) {
    for (let userId in socketConnections) {
      if (socketConnections[userId] === socketId) {
        delete socketConnections[userId];
        return userId; // Return the removed user ID
      }
    }
    return null;
  },

  getSocketId(userId) {
    return socketConnections[userId];
  },

  getAllConnections() {
    return socketConnections;
  },
};

export default SocketModel;
