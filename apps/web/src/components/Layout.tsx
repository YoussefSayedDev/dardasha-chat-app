import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";

export default function Layout() {
  return (
    <main className="bg-background text-foreground flex h-screen items-center">
      <Navbar className="w-16 p-2" />
      <div className="w-full">
        <Outlet />
      </div>
    </main>
  );
}
