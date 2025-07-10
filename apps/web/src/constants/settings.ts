import {
  Bell,
  HelpCircle,
  KeySquare,
  Languages,
  LogOut,
  MessageCircleMore,
  Monitor,
  Shield,
} from "lucide-react";

export const settings_links = [
  {
    name: "General",
    icon: KeySquare,
    description: "Manage your account, devices, and preferences",
  },
  {
    name: "Privacy",
    icon: Shield,
    description: "Control your visibility and interactions",
  },
  {
    name: "Chats",
    icon: MessageCircleMore,
    description: "Customize chat experience and features",
  },
  {
    name: "Notifications",
    icon: Bell,
    description: "Manage alerts and sounds",
  },
  {
    name: "Appearance",
    icon: Monitor,
    description: "Switch themes and UI preferences",
  },
  {
    name: "Language",
    icon: Languages,
    description: "Set your preferred language",
  },
  {
    name: "Help",
    icon: HelpCircle,
    description: "Get support or find answers",
  },
  {
    name: "Sign out",
    icon: LogOut,
    description: "Log out from your account",
    custom_style: "text-red-500 hover:!text-red-500",
  },
];
