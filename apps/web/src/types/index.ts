export interface User {
  id: string;
  name: string;
  avatar: string | null;
  lastSeen: string;
  status: "online" | "offline";
}

export interface Chat {
  id: string;
  isGroup: boolean;
  name: string;
  participants: User[];
  lastMessage: Message;
  updatedAt: string;
  favorite: boolean;
  unread: number;
}

export interface Message {
  id: string;
  senderId: string;
  chatId: string;
  type: "text" | "image" | "video" | "audio" | "file";
  content: MediaContent | string;
  timestamp: string;
  status: "sent" | "delivered" | "seen";
}

export interface MediaContent {
  url: string;
  caption?: string;
  duration?: number;
}

// export type Message = {
//   id: string;
//   name: string;
//   lastMessage: string;
//   timestamp: string;
//   online: boolean;
//   unread: number;
// };
