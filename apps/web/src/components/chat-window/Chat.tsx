import { cn } from "@/lib/utils";
import { ChatFooter } from "./ChatFooter";
import { ChatHeader } from "./ChatHeader";
import { ChatWindow } from "./ChatWindow";

export const Chat: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn(className, "border-border h-screen border-s-2")}>
      <ChatHeader />
      <ChatWindow />
      <ChatFooter />
    </div>
  );
};
