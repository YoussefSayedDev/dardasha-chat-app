import { UserAvatar } from "@/components/shared/UserAvatar";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Phone, Search, Video } from "lucide-react";

export const ChatHeader = () => {
  return (
    <header className="border-border flex h-16 items-center justify-between gap-4 border-b px-5 py-2 shadow-sm">
      <div className="flex items-center gap-3">
        <UserAvatar
          src=""
          name="Youssef El Sayed"
          alt="Youssef El Sayed"
          status="offline"
          className="size-12"
        />
        <div>
          <h1 className="text-xl font-bold">Youssef El Sayed</h1>
          <p className="text-sm">Online</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Button variant="ghost">
          <Phone className="size-5" />
        </Button>
        <Button variant="ghost">
          <Video className="size-5" />
        </Button>
        <Button variant="ghost">
          <Search className="size-5" />
        </Button>
        <Button variant="ghost">
          <EllipsisVertical className="size-5" />
        </Button>
      </div>
    </header>
  );
};
