import { Chat } from "@/components/chat-window/Chat";
import { useParams } from "react-router-dom";
// import { ChatWindow } from "@/components/chat/ChatWindow";

const ChatRoom = () => {
  const { id: chatId } = useParams<{ id: string }>();

  // if (!chatId) return <div>Chat not found.</div>;

  return <Chat className="w-3/4" chatId={chatId} />;
};

export default ChatRoom;
