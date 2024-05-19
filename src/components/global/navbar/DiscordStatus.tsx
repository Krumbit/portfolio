"use client";
import Image from "next/image";
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
    <div className="relative grid h-3 grid-cols-[0fr] transition-all duration-500 ease-in-out sm:hover:h-6 sm:hover:grid-cols-[1fr]">
      <div className="z-10 mr-3 flex gap-2 overflow-hidden">
        <span className="whitespace-nowrap indent-3 text-white">{statusName}</span>
        <Image src="static/icons/Discord.svg" alt="Discord Icon" width={15} height={15} />
      </div>
      <div
        className={`absolute left-0 top-0 size-full animate-ping rounded-full transition-colors ${statusColor}`}
      />
      <div className={`absolute left-0 top-0 size-full rounded-full ${statusColor}`} />
    </div>
  );
}
