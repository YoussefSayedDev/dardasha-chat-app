import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/hooks/useTheme";
import { cn, isArabic } from "@/lib/utils";
import Picker from "@emoji-mart/react";
import { FilePlus, Mic, Send, Smile } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const ChatFooter = () => {
  const [isAttachmentOpen, setIsAttachmentOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const [message, setMessage] = useState("");

  const direction = isArabic(message) ? "rtl" : "ltr";

  const handleEmojiSelect = (emoji: string) => {
    setMessage((prev) => prev + emoji);
  };

  return (
    <footer className="border-border flex h-16 items-center justify-between gap-4 border-t px-4 py-2 shadow-sm">
      <div className="flex items-center">
        <Button
          variant="ghost"
          className={cn(
            "flex items-center",
            isAttachmentOpen && "bg-accent text-accent-foreground",
          )}
          onClick={() => setIsAttachmentOpen(!isAttachmentOpen)}
        >
          <FilePlus className="size-7" />
        </Button>
        <EmojiPickerButton onEmojiSelect={handleEmojiSelect} />
        <Button
          variant="ghost"
          className={cn(
            "flex items-center gap-1",
            isRecording && "bg-accent text-accent-foreground",
          )}
          onClick={() => setIsRecording(!isRecording)}
        >
          <Mic className="size-6.5" />
        </Button>
      </div>
      <div className="w-full">
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          dir={direction}
          className="h-12 flex-1 bg-transparent !text-base outline-none"
          placeholder="Type your message"
        />
      </div>
      <Button
        variant="default"
        className="flex size-11 items-center justify-center"
      >
        <Send className="size-6" />
      </Button>
    </footer>
  );
};

type EmojiPickerButtonProps = {
  onEmojiSelect: (emoji: string) => void;
};

function EmojiPickerButton({ onEmojiSelect }: EmojiPickerButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const { theme } = useTheme();

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={pickerRef}>
      <Button
        variant="ghost"
        className={cn(
          "flex items-center gap-2",
          isOpen && "bg-accent text-accent-foreground",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Smile className="size-7" />
      </Button>

      {isOpen && (
        <div className="absolute bottom-10 left-0 z-50">
          <Picker
            theme={theme}
            onEmojiSelect={(emoji: { native: string }) => {
              onEmojiSelect(emoji.native);
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

// function AttachmentFiles() {}
