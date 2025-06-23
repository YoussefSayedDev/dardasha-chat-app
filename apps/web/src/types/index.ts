// export interface User {
//   id: string;
//   name: string;
//   avatar: string | null;
//   lastSeen: string;
// }

// export interface Chat {
//   id: string;
//   isGroup: boolean;
//   name: string;
//   participants: User[];
//   lastMessage: Message;
//   updatedAt: string;
// }

// export interface Message {
//   id: string;
//   senderId: string;
//   chatId: string;
//   type: "text" | "image" | "video" | "audio" | "file";
//   content: string | MediaContent;
//   timestamp: string;
//   status: "sent" | "delivered" | "seen";
// }

// interface MediaContent {
//   url: string;
//   caption?: string;
//   duration?: number;
// }

export type Message = {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  online: boolean;
  unread: number;
};
