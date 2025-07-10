import { UserAvatar } from "@/components/shared/UserAvatar";
import { Badge } from "@/components/ui/badge";
import type { Chat, Message } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

export const ChannelItem = ({
  id,
  isGroup,
  name,
  participants,
  lastMessage,
  unread,
}: Chat) => {
  const lastMsg = lastMessage as Message;
  const senderName = isGroup
    ? participants.find((p) => p.id === lastMsg.senderId)?.name
    : "";

  return (
    <Link
      className="hover:bg-secondary flex cursor-pointer items-center justify-between gap-2 rounded-md px-4 py-3 transition-colors duration-300"
      key={id}
      to={`${id}`}
    >
      {/* Avatar */}
      <div className="flex items-center gap-3">
        <UserAvatar
          src={participants[0].avatar || "/placeholder-avatar.png"}
          name={name}
          alt={name}
          status={participants[0].status}
          className="h-10 w-10 rounded-full object-cover"
        />

        {/* Chat content */}
        <div className="flex flex-col">
          <span className="text-base font-semibold">{name}</span>
          <span className="text-muted-foreground max-w-[180px] truncate text-sm">
            {isGroup && senderName ? `${senderName}: ` : ""}
            {lastMsg.type === "text"
              ? String(lastMsg.content)
              : lastMsg.type === "image"
                ? "📷 Image"
                : lastMsg.type === "audio"
                  ? "🎙️ Voice Message"
                  : "New message"}
          </span>
        </div>
      </div>

      {/* Time */}
      <div className="flex flex-col items-end gap-1">
        <div className="text-muted-foreground text-xs">
          {formatDistanceToNow(new Date(lastMsg.timestamp), {
            addSuffix: false,
          })}
        </div>
        {unread > 0 && (
          <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
            {unread}
          </Badge>
        )}
      </div>
    </Link>
  );
};
