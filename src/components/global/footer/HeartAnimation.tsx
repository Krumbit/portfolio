"use client";
import { motion } from "framer-motion";

export default function HeartAnimation() {
  return (
    <motion.div
      className="inline-block cursor-pointer"
      whileHover={{
        scale: 1.2,
        transition: {
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
    >
      ❤️
    </motion.div>
  );
}
