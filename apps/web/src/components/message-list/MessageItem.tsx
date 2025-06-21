interface MessageItemProps {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  online: boolean;
  unread?: number;
}

type Message = {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  online: boolean;
  unread?: number;
};

const messages: Message[] = [
  {
    id: "1",
    name: "Sarah Chen",
    lastMessage: "Latest message preview...",
    timestamp: "2m ago",
    online: true,
    unread: 2,
  },
  {
    id: "2",
    name: "Project Alpha",
    lastMessage: "File shared: analysis.pdf",
    timestamp: "15m ago",
    online: true,
  },
  {
    id: "3",
    name: "Dr. Martinez",
    lastMessage: "Thanks for the update",
    timestamp: "1h ago",
    online: false,
  },
];

export const MessageItem = () => {
  return <div className="bg-gray-900">MessageItem</div>;
};
