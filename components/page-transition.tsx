"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 18, scale: 0.992, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{
        opacity: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        filter: { duration: 0.5, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  );
}
