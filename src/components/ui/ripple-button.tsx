"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const rippleButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-spinach-600 text-white hover:bg-spinach-700 transition-colors",
        secondary:
          "bg-muted text-foreground hover:bg-muted/80",
        outline:
          "border border-border bg-background hover:bg-muted hover:border-primary/50",
        ghost:
          "hover:bg-muted hover:text-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface RippleButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>,
    VariantProps<typeof rippleButtonVariants> {
  rippleColor?: string;
  rippleDuration?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

const RippleButton = React.forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({
    className,
    variant,
    size,
    rippleColor = "rgba(255, 255, 255, 0.3)",
    rippleDuration = 600,
    onClick,
    children,
    ...props
  }, ref) => {
    const [ripples, setRipples] = React.useState<Ripple[]>([]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      const newRipple: Ripple = {
        id: Date.now(),
        x,
        y,
        size,
      };

      setRipples(prev => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, rippleDuration);

      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        className={cn(rippleButtonVariants({ variant, size, className }))}
        onClick={handleClick}
        {...props}
      >
        {children}

        {/* Ripple effects */}
        {ripples.map(ripple => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              backgroundColor: rippleColor,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: rippleDuration / 1000 }}
          />
        ))}
      </button>
    );
  }
);

RippleButton.displayName = "RippleButton";

export { RippleButton, rippleButtonVariants };