import { SettingsHeader } from "@/components/settings/SettingsHeader";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Button } from "@/components/ui/button";
import { settings_links } from "@/constants/settings";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import SettingsDetails from "./SettingsDetails";

const SettingsPage: React.FC<{ className?: string }> = ({ className }) => {
  const pathname = useLocation().pathname;
  return (
    <div className="flex h-screen w-full gap-2">
      <div
        className={cn(
          className,
          "border-border flex h-screen w-[500px] flex-col gap-2 border-e-1 px-2",
        )}
      >
        <SettingsHeader />
        <Button
          variant="ghost"
          className="hover:bg-muted flex h-20 w-full items-center justify-start gap-4 rounded-xl p-3 transition"
        >
          <UserAvatar
            name="Youssef El Sayed"
            src=""
            alt="Youssef El Sayed"
            className="size-16 shadow-sm"
            status="offline"
          />

          <div className="flex flex-col items-start justify-center gap-0.5 overflow-hidden">
            <h1 className="truncate text-base font-semibold">
              Youssef El Sayed
            </h1>
            <p className="text-muted-foreground truncate text-sm">
              Software engineer and computer science student
            </p>
          </div>
        </Button>
        {/* <ScrollArea className="h-full w-full overflow-hidden"> */}
        <div>
          {settings_links.map((link) => (
            <Link
              to={`${link.name.toLowerCase()}`}
              className="mb-2 flex flex-col gap-2"
            >
              <Button
                variant="outline"
                className={cn(
                  "flex h-16 items-center justify-start gap-4 p-2",
                  link.custom_style,
                  pathname.includes(link.name.toLowerCase()) &&
                    "bg-accent text-accent-foreground",
                )}
              >
                <link.icon className="size-8" />
                <div className="flex flex-col items-start justify-start gap-1">
                  <h1 className="text-lg font-bold">{link.name}</h1>
                  <p className="text-muted-foreground text-sm">
                    {link.description}
                  </p>
                </div>
              </Button>
            </Link>
          ))}
        </div>
        {/* </ScrollArea> */}
      </div>
      <SettingsDetails />
    </div>
  );
};

export default SettingsPage;
