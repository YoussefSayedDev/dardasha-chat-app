import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  className?: string;
  src: string;
  alt: string;
  name: string;
  status?: "online" | "offline";
}

export const UserAvatar = ({
  className,
  src,
  alt,
  status = "online",
  name,
}: UserAvatarProps) => {
  const fullbackName = name
    .toUpperCase()
    .split(" ")
    .map((word) => word[0])
    .join("");
  return (
    <div className="relative w-fit">
      <Avatar className={className}>
        <AvatarImage
          src={src}
          alt={alt || "User Avatar"}
          className="w-full object-cover"
        />
        <AvatarFallback className="text-xs font-bold">
          {fullbackName}
        </AvatarFallback>
      </Avatar>
      <span
        className={cn(
          "absolute top-0 right-0 z-20 size-2 rounded-full ring-2 ring-white",
          status === "online" && "bg-green-600",
        )}
      />
    </div>
  );
};
