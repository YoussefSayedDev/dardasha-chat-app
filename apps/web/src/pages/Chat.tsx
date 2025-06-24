import { Link } from "react-router-dom";

const Chats = () => {
  const dummyChats = [
    { id: "chat1", name: "Ahmed" },
    { id: "chat2", name: "Youssef" },
  ];

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">Chats</h2>
      <ul className="space-y-2">
        {dummyChats.map((chat) => (
          <li key={chat.id}>
            <Link
              to={`/chats/${chat.id}`}
              className="bg-muted hover:bg-secondary block rounded-md px-4 py-2"
            >
              {chat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chats;
