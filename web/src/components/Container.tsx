import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-10 lg:px-14",
        size === "default" && "max-w-[1200px]",
        size === "wide" && "max-w-[1400px]",
        size === "narrow" && "max-w-[760px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
