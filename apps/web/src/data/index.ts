import { MessagesSquare, Phone, Users, type LucideIcon } from "lucide-react";

type Icons = {
  name: string;
  icon: LucideIcon;
};

export const icons: Icons[] = [
  {
    name: "Chats",
    icon: MessagesSquare,
  },
  {
    name: "Groups",
    icon: Users,
  },
  {
    name: "Calls",
    icon: Phone,
  },
];
