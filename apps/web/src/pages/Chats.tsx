import { ChatFooter } from "@/components/chat/chat-window/ChatFooter";
import { ChatHeader } from "@/components/chat/chat-window/ChatHeader";
import { ChatWindow } from "@/components/chat/chat-window/ChatWindow";
import { cn } from "@/lib/utils";

const ChatsPage: React.FC<{
  className?: string;
  chatId: string | undefined;
}> = ({ className, chatId }) => {
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
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">No chat selected.</h1>
    </div>
  );
}

export default ChatsPage;
