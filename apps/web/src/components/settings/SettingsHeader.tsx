import { SearchInput } from "@/components/chat/channel-list/ChannelHeader";

export const SettingsHeader = () => {
  return (
    <header>
      <div className="flex items-center justify-between gap-2 py-3">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      <div className="flex items-center gap-4">
        <SearchInput />
      </div>
    </header>
  );
};
