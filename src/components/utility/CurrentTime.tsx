"use client";

import { useEffect, useState } from "react";
import { TIME_FORMAT_OPTIONS } from "util/constants";

export default function CurrentTime() {
  const [time, setTime] = useState("--:-- --");

  useEffect(() => {
    setTime(getTime());
    const interval = setInterval(() => setTime(getTime()), 5_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-lg text-gray-700 dark:text-gray-300">
      {time}
    </span>
  );
}

function getTime() {
  return new Date().toLocaleString("en-US", TIME_FORMAT_OPTIONS).toLocaleLowerCase();
}