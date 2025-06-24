import { cn } from "@/lib/utils";
import { ChatFooter } from "./ChatFooter";
import { ChatHeader } from "./ChatHeader";
import { ChatWindow } from "./ChatWindow";

export const Chat: React.FC<{
  className?: string;
  chatId: string | undefined;
}> = ({ className, chatId }) => {
  if (!chatId) return <NoChatSelected />;
  return (
    <div className={cn(className, "border-border h-screen border-s-2")}>
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
