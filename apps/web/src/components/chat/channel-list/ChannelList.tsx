import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { chats } from "@/data/dummy";
import { cn } from "@/lib/utils";
import { Archive } from "lucide-react";
import { ChannelHeader } from "./ChannelHeader";
import { ChannelItem } from "./ChannelItem";

export const ChannelList: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={cn(className, "flex h-screen flex-col gap-2 px-2")}>
      <div>
        <ChannelHeader />
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
          {chats.map((chat) => (
            <ChannelItem
              key={chat.id}
              id={chat.id}
              isGroup={chat.isGroup}
              lastMessage={chat.lastMessage}
              name={chat.name}
              participants={chat.participants}
              updatedAt={chat.updatedAt}
              unread={chat.unread}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
