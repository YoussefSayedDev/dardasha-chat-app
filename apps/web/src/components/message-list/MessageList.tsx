import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { messages } from "@/data/dummy";
import { cn } from "@/lib/utils";
import { Archive } from "lucide-react";
import { MessageHeader } from "./MessageHeader";
import { MessageItem } from "./MessageItem";

export const MessageList: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={cn(className, "flex h-screen flex-col gap-2")}>
      <div>
        <MessageHeader />
        <Button
          variant="ghost"
          className="flex w-full items-center justify-start gap-2 py-2 ps-10"
        >
          <Archive className="text-muted-foreground size-6" />
          <span className="text-muted-foreground text-base font-semibold">
            Archive
          </span>
        </Button>
      </div>
      <ScrollArea className="h-full w-full overflow-hidden">
        <div className="flex flex-col gap-2 pe-3">
          {messages.map((message) => (
            <MessageItem
              key={message.id}
              id={message.id}
              name={message.name}
              lastMessage={message.lastMessage}
              timestamp={message.timestamp}
              online={message.online}
              unread={message.unread}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
