import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EllipsisVertical, Search, SquarePlus } from "lucide-react";
import { useState } from "react";

export const ChannelHeader = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className="flex items-center justify-between gap-2 py-3">
        <h1 className="text-2xl font-bold">Dardasha</h1>
        <div className="flex items-center">
          <Button variant="ghost" className="text-muted-foreground">
            <SquarePlus className="size-6" />
          </Button>
          <Button variant="ghost" className="text-muted-foreground">
            <EllipsisVertical className="size-6" />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <SearchInput />
      </div>
      <div className="h-full w-full overflow-auto">
        <div className="flex w-full items-center gap-2 py-2">
          <Button
            variant={selected === 0 ? "default" : "outline"}
            onClick={() => setSelected(0)}
          >
            All
          </Button>
          <Button
            variant={selected === 1 ? "default" : "outline"}
            onClick={() => setSelected(1)}
          >
            Unread
          </Button>
          <Button
            variant={selected === 2 ? "default" : "outline"}
            onClick={() => setSelected(2)}
          >
            Favorites
          </Button>
          <Button
            variant={selected === 3 ? "default" : "outline"}
            onClick={() => setSelected(3)}
          >
            Groups
          </Button>
        </div>
      </div>
    </div>
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
