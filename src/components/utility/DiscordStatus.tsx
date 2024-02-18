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

export default function DiscordStatus() {
  const { data, isLoading } = useLanyard({ userId: DISCORD_USER_ID });
  const status = data?.data.discord_status ?? "offline";
  const statusColor = isLoading ? loadingColor : statusColors[status];

  return (
    <>
      <div className="relative flex h-3 w-3">
        <div
          className={`absolute inline-flex h-full w-full animate-ping rounded-full transition-colors ${statusColor}`}
        />
        <div className={`relative inline-flex h-full w-full rounded-full ${statusColor}`} />
      </div>
    </>
  );
}
