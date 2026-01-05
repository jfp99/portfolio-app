import { useEffect, useState } from "react";
import { useInView } from "motion/react";

interface UseAnimatedCounterOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
}

export function useAnimatedCounter(
  ref: React.RefObject<HTMLElement | null>,
  { end, duration = 2000, start = 0, decimals = 0 }: UseAnimatedCounterOptions
) {
  const [count, setCount] = useState(start);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = start + (end - start) * easeOutQuart;

      setCount(Math.round(currentCount * Math.pow(10, decimals)) / Math.pow(10, decimals));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration, start, decimals]);

  return count;
}