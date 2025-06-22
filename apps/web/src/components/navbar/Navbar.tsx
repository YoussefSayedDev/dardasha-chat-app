import { UserAvatar } from "@/components/shared/UserAvatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { icons } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { Settings } from "lucide-react";
import { useState } from "react";

export const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  const [selected, setSelected] = useState(0);
  const [isHover, setIsHover] = useState(-1);

  const { toggleTheme, theme } = useTheme();
  return (
    <div
      className={cn(
        className,
        "border-border flex h-screen flex-col items-center gap-3 border-e-1 py-4 shadow-sm",
      )}
    >
      {icons.map(({ icon: Icon, name }, index) => (
        <div key={index} className="relative">
          <Button
            variant="ghost"
            className={cn(
              "flex items-center gap-2",
              selected === index && "bg-accent text-accent-foreground",
            )}
            onClick={() => setSelected(index)}
            onMouseOver={() => setIsHover(index)}
            onMouseLeave={() => setIsHover(-1)}
          >
            <Icon className="size-6" />
          </Button>
          {isHover === index && (
            <span className="bg-background border-border absolute top-1/2 left-[58px] h-fit w-fit -translate-y-1/2 rounded-md border-1 px-2 py-1 text-sm shadow-sm">
              {name}
            </span>
          )}
        </div>
      ))}
      <Separator className="bg-border h-px w-full" />
      <div className="flex h-full flex-col items-center justify-between gap-2">
        <div className="relative">
          <Button
            variant="ghost"
            className={cn(
              "flex items-center gap-2",
              selected === 3 && "bg-accent text-accent-foreground",
            )}
            onClick={() => setSelected(3)}
            onMouseOver={() => setIsHover(3)}
            onMouseLeave={() => setIsHover(-1)}
          >
            <Settings className="size-6" />
          </Button>
          {isHover === 3 && (
            <span className="bg-background border-border absolute top-1/2 left-[58px] h-fit w-fit -translate-y-1/2 rounded-md border-1 px-2 py-1 text-sm shadow-sm">
              Settings
            </span>
          )}
        </div>
        <div className="flex flex-col items-center gap-4">
          <div onClick={toggleTheme} className="relative">
            <Switch
              className="cursor-pointer"
              onClick={() => setSelected(4)}
              onMouseOver={() => setIsHover(4)}
              onMouseLeave={() => setIsHover(-1)}
            />
            {isHover === 4 && (
              <span className="bg-background border-border absolute top-1/2 left-[52px] h-fit w-fit -translate-y-1/2 rounded-md border-1 px-2 py-1 text-sm text-nowrap shadow-sm">
                {theme === "light" ? "Turn on Dark Mode" : "Turn off Dark Mode"}
              </span>
            )}
          </div>
          <div className="relative">
            <Button
              variant="icon"
              onMouseOver={() => setIsHover(5)}
              onMouseLeave={() => setIsHover(-1)}
            >
              <UserAvatar
                src=""
                alt=""
                name="Youssef Elsayed"
                className="size-10"
              />
            </Button>
            {isHover === 5 && (
              <span className="bg-background border-border absolute top-1/2 left-[70px] h-fit w-fit -translate-y-1/2 rounded-md border-1 px-2 py-1 text-sm shadow-sm">
                Profile
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
