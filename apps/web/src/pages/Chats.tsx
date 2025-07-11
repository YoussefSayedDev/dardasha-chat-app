import { ChatFooter } from "@/components/chat/chat-window/ChatFooter";
import { ChatHeader } from "@/components/chat/chat-window/ChatHeader";
import { ChatWindow } from "@/components/chat/chat-window/ChatWindow";
import { cn } from "@/lib/utils";
import { useParams } from "react-router-dom";

const ChatsPage: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { id: chatId } = useParams<{ id: string }>();

  if (!chatId) return <NoChatSelected />;

  return (
    <div className={cn(className, "border-border h-screen w-full border-s-2")}>
      <ChatHeader />
      <ChatWindow chatId={chatId} />
      <ChatFooter />
    </div>
  );
};

function NoChatSelected() {
  return (
    <div className="flex h-screen w-[calc(100%-500px)] items-center justify-center border-s-2">
      <h1 className="text-2xl font-bold text-gray-500">No chat selected.</h1>
    </div>
  );
}

export default ChatsPage;
