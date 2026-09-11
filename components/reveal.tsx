"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  duration?: number;
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  className = "",
  duration = 0.65,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
        x,
        filter: "blur(5px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once,
        amount: 0.18,
        margin: "0px 0px -40px 0px",
      }}
      transition={{
        opacity: {
          duration: duration * 0.75,
          delay,
          ease: "easeOut",
        },
        y: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
        x: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
        filter: {
          duration: duration * 0.7,
          delay,
          ease: "easeOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
}
