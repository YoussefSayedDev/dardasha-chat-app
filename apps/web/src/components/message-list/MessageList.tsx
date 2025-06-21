import { cn } from "@/lib/utils";
import { MessageHeader } from "./MessageHeader";
import { MessageItem } from "./MessageItem";

export const MessageList: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={cn(className, "flex h-screen flex-col gap-4")}>
      <MessageHeader />
      <div>
        <MessageItem />
        <MessageItem />
        <MessageItem />
      </div>
    </div>
  );
};
