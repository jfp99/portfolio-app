"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glareOpacity?: number;
  scale?: number;
  perspective?: number;
  disabled?: boolean;
}

/**
 * 3D Tilt Card Component
 *
 * A card that responds to mouse movement with 3D tilt effects,
 * glare, and subtle scaling. Perfect for project showcases.
 */
export function TiltCard({
  children,
  className,
  tiltAmount = 10,
  glareOpacity = 0.15,
  scale = 1.02,
  perspective = 1000,
  disabled = false,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth animations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring config for smooth, natural movement
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [tiltAmount, -tiltAmount]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-tiltAmount, tiltAmount]), springConfig);
  const scaleValue = useSpring(isHovered && !disabled ? scale : 1, springConfig);

  // Glare position
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (disabled || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalize mouse position to -0.5 to 0.5
    const normalizedX = (e.clientX - centerX) / rect.width;
    const normalizedY = (e.clientY - centerY) / rect.height;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseEnter = () => {
    if (!disabled) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective,
        rotateX: disabled ? 0 : rotateX,
        rotateY: disabled ? 0 : rotateY,
        scale: scaleValue,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-2xl transition-shadow duration-300",
        isHovered && "shadow-2xl shadow-black/10",
        className
      )}
    >
      {/* Card Content */}
      <div className="relative z-10">{children}</div>

      {/* Glare Effect */}
      {!disabled && isHovered && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl overflow-hidden"
          style={{
            background: `radial-gradient(
              circle at ${glareX} ${glareY},
              rgba(255, 255, 255, ${glareOpacity}) 0%,
              transparent 50%
            )`,
          }}
        />
      )}

      {/* Border Glow (subtle, single color) */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute -inset-px z-0 rounded-2xl bg-spinach-500/30"
          style={{
            filter: "blur(1px)",
          }}
        />
      )}
    </motion.div>
  );
}

/**
 * 3D Tilt Card with Shine Effect
 * More dramatic version for hero sections
 */
export function TiltCardShine({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <TiltCard
      className={className}
      tiltAmount={15}
      glareOpacity={0.25}
      scale={1.05}
    >
      {children}
    </TiltCard>
  );
}

/**
 * Project Card with 3D Tilt
 * Pre-styled card for project showcases
 */
export function ProjectTiltCard({
  children,
  className,
  featured = false,
}: {
  children: ReactNode;
  className?: string;
  featured?: boolean;
}) {
  return (
    <TiltCard
      className={cn(
        "group",
        featured && "col-span-2 row-span-2",
        className
      )}
      tiltAmount={featured ? 8 : 12}
      glareOpacity={featured ? 0.2 : 0.15}
      scale={featured ? 1.01 : 1.03}
    >
      <div
        className={cn(
          "h-full rounded-2xl border border-border bg-card overflow-hidden",
          "transition-colors duration-300",
          "group-hover:border-spinach-500/30"
        )}
      >
        {children}
      </div>
    </TiltCard>
  );
}

export default TiltCard;
