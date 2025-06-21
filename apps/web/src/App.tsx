import { Chat } from "@/components/chat-window/Chat";
import { MessageList } from "@/components/message-list/MessageList";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <main className="bg-background text-foreground h-screen">
      <div className="flex items-center">
        <Navbar className="w-16 p-2" />
        <MessageList className="w-[calc(25%-64px)] p-2" />
        <Chat className="w-3/4 p-2" />
      </div>
    </main>
  );
}

export default App;
