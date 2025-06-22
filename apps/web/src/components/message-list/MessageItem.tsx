import { UserAvatar } from "@/components/shared/UserAvatar";
import { Badge } from "@/components/ui/badge";

interface MessageItemProps {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  online: boolean;
  unread: number;
}

export const MessageItem = ({
  id,
  name,
  lastMessage,
  timestamp,
  online,
  unread,
}: MessageItemProps) => {
  return (
    <div
      className="hover:bg-secondary flex cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-3 transition-colors duration-300"
      key={id}
    >
      <div className="flex items-center gap-2">
        <UserAvatar
          src=""
          alt=""
          name={name}
          className="size-10 shadow-sm"
          status={online ? "online" : "offline"}
        />
        <div className="flex flex-col gap-1">
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-muted-foreground text-xs">{lastMessage}</div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <div className="text-muted-foreground text-xs">{timestamp}</div>
        {unread > 0 && (
          <Badge className="h-5 min-w-5 rounded-full px-1 font-mono text-[10px] tabular-nums">
            {unread}
          </Badge>
        )}
      </div>
    </div>
  );
};
