import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, id, ...props }, ref) => {
    const errorId = error && id ? `${id}-error` : undefined;

    return (
      <div className="w-full">
        <textarea
          id={id}
          className={cn(
            "flex min-h-[120px] w-full rounded-lg border bg-background px-4 py-3",
            "text-sm placeholder:text-muted-foreground",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-primary/20",
            error
              ? "border-destructive focus:border-destructive"
              : "border-input focus:border-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "resize-y",
            className
          )}
          ref={ref}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={errorId}
          {...props}
        />
        {error && (
          <p
            id={errorId}
            role="alert"
            className="mt-1.5 text-sm text-destructive"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
