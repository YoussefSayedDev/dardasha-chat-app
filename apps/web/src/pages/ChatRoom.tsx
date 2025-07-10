import ChatsPage from "@/pages/Chats";
import { useParams } from "react-router-dom";
// import { ChatWindow } from "@/components/chat/ChatWindow";

const ChatRoom = () => {
  const { id: chatId } = useParams<{ id: string }>();

  // if (!chatId) return <div>Chat not found.</div>;

  return <ChatsPage className="w-full" chatId={chatId} />;
};

export default ChatRoom;
