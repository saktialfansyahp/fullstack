// src/components/PrivateChat.tsx
import React, { useEffect, useState, useCallback } from "react";
import { WS_URL } from "../lib/global";
import { User, Message, ServerMessage, ChatMessage } from "../models/types";

const usePrivateChat = (currentUser: User, otherUser: User) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  const getRoomId = useCallback(() => {
    const sortedIds = [currentUser.id, otherUser.id].sort();
    return `${sortedIds[0]}-${sortedIds[1]}`;
  }, [currentUser.id, otherUser.id]);

  useEffect(() => {
    console.log("Attempting to connect to:", WS_URL);
    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {
      console.log("WebSocket connection opened");
      setIsConnected(true);
      const authMessage = {
        type: "auth",
        senderId: currentUser.id,
        roomId: getRoomId(),
      };
      console.log("Sending auth message:", authMessage);
      ws.send(JSON.stringify(authMessage));
    };

    ws.onmessage = (event) => {
      try {
        console.log("Received WebSocket message:", event.data);
        const data: ServerMessage = JSON.parse(event.data);

        switch (data.type) {
          case "message":
            if (data.id && data.senderId && data.content && data.timestamp) {
              const newMessage: Message = {
                id: data.id,
                senderId: data.senderId,
                content: data.content,
                timestamp: data.timestamp,
                roomId: data.roomId,
              };
              setMessages((prev) => [...prev, newMessage]);
            }
            break;

          case "history":
            if (data.messages) {
              setMessages(data.messages);
            }
            break;

          case "error":
            console.error("Server error:", data.content);
            break;

          default:
            console.log("Unknown message type:", data.type);
        }
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = (event) => {
      console.log("WebSocket closed:", event.code, event.reason);
      setIsConnected(false);
      setTimeout(() => {
        console.log("Attempting to reconnect...");
        setSocket(new WebSocket(WS_URL));
      }, 3000);
    };

    setSocket(ws);

    return () => {
      console.log("Cleaning up WebSocket connection");
      ws.close();
    };
  }, [currentUser.id, getRoomId]);

  const sendMessage = useCallback(
    (content: string) => {
      if (socket?.readyState === WebSocket.OPEN) {
        const messageData: ChatMessage = {
          type: "message",
          content,
          senderId: currentUser.id,
          roomId: getRoomId(),
          timestamp: Date.now(),
        };
        console.log("Sending message:", messageData);
        socket.send(JSON.stringify(messageData));
      } else {
        console.log("WebSocket is not open. ReadyState:", socket?.readyState);
      }
    },
    [socket, currentUser.id, getRoomId]
  );

  return {
    messages,
    sendMessage,
    isConnected,
  };
};

const PrivateChat: React.FC<{
  currentUser: User;
  otherUser: User;
}> = ({ currentUser, otherUser }) => {
  const [messageInput, setMessageInput] = useState("");
  const { messages, sendMessage, isConnected } = usePrivateChat(
    currentUser,
    otherUser
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageInput.trim()) {
      sendMessage(messageInput);
      setMessageInput("");
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2>Chat with {otherUser.name}</h2>
        <div className="flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full ${
              isConnected ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <span>{isConnected ? "Connected" : "Disconnected"}</span>
        </div>
      </div>

      <div className="border rounded p-4 mb-4 h-64 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-2 ${
              msg.senderId === currentUser.id ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block p-2 rounded ${
                msg.senderId === currentUser.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {msg.content}
              <div className="text-xs mt-1">
                {new Date(msg.timestamp).toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          className="flex-1 border rounded px-2 py-1"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          disabled={!isConnected}
          className="px-4 py-1 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default PrivateChat;
