"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="animate-drift absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-primary/30 blur-[120px]" />
      <div
        className="animate-drift absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-[120px]"
        style={{ animationDelay: "-8s" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-secondary/20 blur-[110px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
