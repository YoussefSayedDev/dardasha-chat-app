import { UserAvatar } from "@/components/shared/UserAvatar";

export const ChatHeader = () => {
  return (
    <header>
      <UserAvatar
        src="/images/no-avatar.png"
        alt="User Avatar"
        name="Youssef Elsayed"
        status="online"
      />
    </header>
  );
};
