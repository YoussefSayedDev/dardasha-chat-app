import { ChannelList } from "@/components/chat/channel-list/ChannelList";
import { Outlet } from "react-router-dom";

export default function ChatsLayout() {
  return (
    <div className="flex items-center">
      <ChannelList className="w-[500px]" />
      <Outlet />
    </div>
  );
}
