import ChatsLayout from "@/components/ChatsLayout";
import Layout from "@/components/Layout";
import CallsPage from "@/pages/Calls";
import ChatsPage from "@/pages/Chats";
import GroupsPage from "@/pages/Groups";
import SettingsPage from "@/pages/Settings";
import SettingsDetails from "@/pages/SettingsDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
            <Route path="" element={<ChatsPage />} />
            <Route path=":id" element={<ChatsPage />} />
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
