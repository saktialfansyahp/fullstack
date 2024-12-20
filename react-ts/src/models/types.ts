// src/models/types.ts
export interface User {
  id: string;
  name: string;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  roomId?: string;
}

export interface ChatMessage {
  type: "message" | "auth";
  content?: string;
  senderId: string;
  roomId: string;
  timestamp?: number;
}

export interface ServerMessage {
  type: "message" | "history" | "error";
  id?: string;
  senderId?: string;
  content?: string;
  timestamp?: string;
  messages?: Message[];
  roomId?: string;
}
