import ChatsLayout from "@/components/ChatsLayout";
import Layout from "@/components/Layout";
import CallsPage from "@/pages/Calls";
import ChatRoom from "@/pages/ChatRoom";
import GroupsPage from "@/pages/Groups";
import SettingsPage from "@/pages/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SettingsDetails from "./pages/SettingsDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="groups" element={<GroupsPage />} />
          <Route path="calls" element={<CallsPage />} />
          <Route path="settings" element={<SettingsPage />}>
            <Route path=":id" element={<SettingsDetails />} />
          </Route>

          {/* Chats */}
          <Route path="chats" element={<ChatsLayout />}>
            {/* <Route path="/" element={<ChatRoom />} /> */}
            <Route path=":id" element={<ChatRoom />} />
          </Route>
        </Route>

        <Route path="*" element={<div>404 - Not Found</div>} />
        {/* <Route path="/" element={<Layout />}> */}
        {/* <Route path="/chats" element={<ChatsLayout />}> */}
        {/* <Route path="/" element={<Navigate to="/chats" />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route
            path="/chats"
            // element={isAuthenticated ? <Chats /> : <Navigate to="/login" />}
            element={<Chats />}
          /> */}
        {/* <Route
              path="/:id"
              // element={isAuthenticated ? <ChatRoom /> : <Navigate to="/login" />}
              element={<ChatRoom />}
            /> */}
        {/* </Route> */}
        {/* <Route path="*" element={<div>404 - Not Found</div>} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
