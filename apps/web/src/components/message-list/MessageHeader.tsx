import { Input } from "@/components/ui/input";
import { Menu, Search } from "lucide-react";

export const MessageHeader = () => {
  return (
    <div className="flex items-center gap-4">
      <Menu className="size-10" />
      <SearchInput />
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
