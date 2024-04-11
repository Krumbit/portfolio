"use client";

import { useEffect, useState } from "react";
import { TIME_FORMAT_OPTIONS } from "util/constants";

export default function CurrentTime() {
  const [hour12, setHour12] = useState(true);
  const [time, setTime] = useState(dateToString(new Date(), hour12));
  const toggleHour12 = () => setHour12(!hour12);

  useEffect(() => {
    setTime(dateToString(new Date(), hour12));
    const interval = setInterval(() => setTime(dateToString(new Date(), hour12)), 5_000);

    return () => clearInterval(interval);
  }, [hour12]);

  return (
    <span
      className="cursor-pointer select-none text-lg text-gray-700 dark:text-gray-300"
      onClick={toggleHour12}
      title={`Switch to ${hour12 ? "24" : "12"}-hour format`}
      suppressHydrationWarning
    >
      {time}
    </span>
  );
}

function dateToString(date: Date, hour12: boolean) {
  return date.toLocaleString("en-US", { ...TIME_FORMAT_OPTIONS, hour12 }).toLocaleLowerCase();
}
