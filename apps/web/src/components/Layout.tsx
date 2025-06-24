import { Outlet } from "react-router-dom";
import { ChannelList } from "./channel-list/ChannelList";
import { Navbar } from "./navbar/Navbar";

export default function Layout() {
  return (
    <main className="bg-background text-foreground h-screen">
      <div className="flex items-center">
        <Navbar className="w-16 p-2" />
        <ChannelList className="w-[calc(25%-64px)] p-2" />
        <Outlet />
      </div>
    </main>
  );
}
