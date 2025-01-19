import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatHeader from "./ChatPanel/ChatHeader";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function ChatBox({ chat }) {
  const [data, setData] = useState({});
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { name, type } = chat;

  const navigate = useNavigate();

  useEffect(() => {
    let member;

    if (type === "member") {
      member = name;
    }

    if (!member) {
      // navigate("/");
      console.log("Member is not defined!")
    }

    setData({
      chatId: 1,
      name: name,
      type: type,
      image: "Profile image of Other member", // Placeholder
    });

    // Listen for incoming messages
    socket.on("receive-message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("receive-message");
    };
  }, [chat]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const messageData = {
        sender: "You", // Replace with actual user info if available
        receiver: name,
        content: newMessage,
        timestamp: new Date().toISOString(),
      };

      // Emit the message to the server
      socket.emit("send-message", messageData);

      // Update the local chat log (don't add the same message for both sender and receiver)
      setMessages((prevMessages) => [...prevMessages, messageData]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      sendMessage(); // Send message when Enter key is pressed (without Shift)
    }
  };

  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader data={data} />

      {(type === "member" || type === "task") && (
        <>
          {/* Chat Messages */}
          <div
            className="flex-grow p-4 overflow-y-auto"
            style={{ maxHeight: "70vh", borderBottom: "1px solid #ccc" }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`p-3 rounded-lg ${
                    msg.sender === "You"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  style={{
                    maxWidth: "60%", // Control message width
                    wordBreak: "break-word",
                  }}
                >
                  <strong>{msg.sender}:</strong> {msg.content}
                </p>
              </div>
            ))}
          </div>

          {/* Input for New Messages */}
          <div className="p-4 flex items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded mr-2"
              onKeyDown={handleKeyPress}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Send
            </button>
          </div>
        </>
      )}
      {type === "group" && (
        <>
          {/* Chat Messages */}
          <div
            className="flex-grow p-4 overflow-y-auto"
            style={{ maxHeight: "70vh", borderBottom: "1px solid #ccc" }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`p-3 rounded-lg ${
                    msg.sender === "You"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  style={{
                    maxWidth: "60%", // Control message width
                    wordBreak: "break-word",
                  }}
                >
                  <strong>{msg.sender}:</strong> {msg.content}
                </p>
              </div>
            ))}
          </div>

          {/* Input for New Messages */}
          <div className="p-4 flex items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded mr-2"
              onKeyDown={handleKeyPress}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded"
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ChatBox;
