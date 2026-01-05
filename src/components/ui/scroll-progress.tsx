"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Smooth spring animation for the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsVisible(latest > 0.05); // Show when scrolled down a bit
    });

    return unsubscribe;
  }, [scrollYProgress]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-spinach-500"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
}