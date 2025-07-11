import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { EllipsisVertical, Search, SquarePlus } from "lucide-react";

export const ChannelHeader = ({
  selected,
  setSelected,
}: {
  selected: number;
  setSelected: (index: number) => void;
}) => {
  return (
    <header>
      <div className="flex items-center justify-between gap-2 py-3">
        <h1 className="text-2xl font-bold">Dardasha</h1>
        <div className="flex items-center">
          <Button variant="ghost" className="text-muted-foreground">
            <SquarePlus className="size-6" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-muted-foreground">
                <EllipsisVertical className="size-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <SearchInput />
      </div>
      <div className="h-full w-full overflow-auto">
        <div className="flex w-full items-center gap-2 py-2">
          <Button
            variant={selected === 0 ? "default" : "outline"}
            size="sm"
            onClick={() => setSelected(0)}
          >
            All
          </Button>
          <Button
            variant={selected === 1 ? "default" : "outline"}
            size="sm"
            onClick={() => setSelected(1)}
          >
            Unread
          </Button>
          <Button
            variant={selected === 2 ? "default" : "outline"}
            size="sm"
            onClick={() => setSelected(2)}
          >
            Favorites
          </Button>
          <Button
            variant={selected === 3 ? "default" : "outline"}
            size="sm"
            onClick={() => setSelected(3)}
          >
            Groups
          </Button>
        </div>
      </div>
    </header>
  );
};

export const SearchInput = () => {
  return (
    <div className="relative w-full">
      <Input type="text" placeholder="Search" className="w-full ps-10" />
      <Search className="text-muted-foreground absolute top-1/2 left-2 size-5 -translate-y-1/2" />
    </div>
  );
};
