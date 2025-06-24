import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ChatRoom from "./pages/ChatRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<Navigate to="/chats" />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route
            path="/chats"
            // element={isAuthenticated ? <Chats /> : <Navigate to="/login" />}
            element={<Chats />}
          /> */}
          <Route
            path="/:id"
            // element={isAuthenticated ? <ChatRoom /> : <Navigate to="/login" />}
            element={<ChatRoom />}
          />
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
