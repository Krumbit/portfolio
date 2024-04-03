"use client";
import { LanyardData, useLanyard } from "react-use-lanyard";
import { DISCORD_USER_ID } from "util/constants";

const loadingColor = "bg-blue-500";
const statusColors = {
  online: "bg-green-500",
  idle: "bg-yellow-500",
  dnd: "bg-red-500",
  offline: "bg-gray-500",
} satisfies Record<LanyardData["discord_status"], string>;

const statusMapping = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline",
} satisfies Record<LanyardData["discord_status"], string>;

export default function DiscordStatus() {
  const { data, isLoading } = useLanyard({ userId: DISCORD_USER_ID });
  const status = data?.data.discord_status ?? "offline";
  const statusColor = isLoading ? loadingColor : statusColors[status];
  const statusName = isLoading ? "Loading" : statusMapping[status];

  return (
    <div className="size-3 group relative">
      <div
        className={`size-full absolute left-0 top-0 animate-ping rounded-full transition-colors ${statusColor}`}
      />
      <div
        className={`size-full absolute left-0 top-0 overflow-hidden rounded-full indent-3 text-sm ${statusColor}`}
      />
    </div>
  );
}
