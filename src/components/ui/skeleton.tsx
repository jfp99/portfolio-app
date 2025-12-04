import { cn } from "@/lib/utils";

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <Skeleton className="h-48 w-full rounded-xl" />
      <div className="mt-4 space-y-3">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <Skeleton className="aspect-video w-full" />
      <div className="p-6 space-y-3">
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-24" />
        </div>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}

export function CaseStudyCardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <Skeleton className="aspect-video w-full" />
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
        <Skeleton className="h-7 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <div className="flex gap-4 pt-2">
          <Skeleton className="h-10 w-28 rounded-lg" />
          <Skeleton className="h-10 w-24 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-32" />
      </div>
    </div>
  );
}
