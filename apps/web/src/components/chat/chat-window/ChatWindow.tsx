import { ScrollArea } from "@/components/ui/scroll-area";
import { chats, messages } from "@/data/dummy";
import type { MediaContent, Message } from "@/types";
import {
  AudioMessage,
  FileMessage,
  ImageMessage,
  TextMessage,
  VideoMessage,
} from "./MsgTypes";

export const ChatWindow = ({ chatId }: { chatId: string }) => {
  const currentUserId = chats.find((c) => c.id === chatId)?.participants[0].id;
  const filteredMessages = messages
    .filter((msg) => msg.chatId === chatId)
    .splice(0, 50);
  return (
    <ScrollArea className="h-[calc(100vh-128px)]">
      <div className="flex w-full flex-col space-y-2 px-4 py-2">
        {filteredMessages.map((msg: Message) => {
          const isOwnMessage = msg.senderId === currentUserId;
          const isMedia = typeof msg.content === "object";
          const content = isMedia ? (msg.content as MediaContent) : { url: "" };

          switch (msg.type) {
            case "text":
              return (
                <TextMessage
                  key={msg.id}
                  content={typeof msg.content === "string" ? msg.content : ""}
                  isOwnMessage={isOwnMessage}
                />
              );

            case "image":
              return (
                <ImageMessage
                  key={msg.id}
                  content={content}
                  caption={"caption" in content ? content.caption : undefined}
                  isOwnMessage={isOwnMessage}
                />
              );

            case "video":
              return (
                <VideoMessage
                  key={msg.id}
                  content={content}
                  isOwnMessage={isOwnMessage}
                />
              );

            case "audio":
              return (
                <AudioMessage
                  key={msg.id}
                  content={content}
                  duration={
                    "duration" in content ? content.duration : undefined
                  }
                  isOwnMessage={isOwnMessage}
                />
              );

            case "file":
              return (
                <FileMessage
                  key={msg.id}
                  content={content}
                  isOwnMessage={isOwnMessage}
                />
              );

            default:
              return (
                <TextMessage
                  key={msg.id}
                  content={"[Unsupported message]"}
                  isOwnMessage={isOwnMessage}
                />
              );
          }
        })}
      </div>
    </ScrollArea>
  );
};
