"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  duration?: number;
  once?: boolean;
};

export function Reveal({ children, delay = 0, y = 28, x = 0, className = "", duration = 0.65, once = true }: RevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount: 0.18, margin: "0px 0px -40px 0px" }}
      transition={{
        opacity: { duration: duration * 0.75, delay, ease: "easeOut" },
        y: { duration, delay, ease: [0.22, 1, 0.36, 1] },
        x: { duration, delay, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {children}
    </motion.div>
  );
}
