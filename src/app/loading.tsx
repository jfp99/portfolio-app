import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <Loader2
          className="h-8 w-8 animate-spin text-primary"
          aria-hidden="true"
        />
      </div>
      <p className="mt-4 text-muted-foreground">Loading...</p>
    </div>
  );
}
