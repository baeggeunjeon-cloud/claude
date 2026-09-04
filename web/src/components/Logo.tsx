import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <Link
      href="/"
      aria-label="머니프레임코치협회 홈"
      className={cn(
        "group inline-flex items-center gap-2.5",
        tone === "paper" ? "text-paper" : "text-ink",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "block h-[15px] w-[15px] border transition-colors",
          tone === "paper"
            ? "border-paper/60 group-hover:border-paper"
            : "border-ink/40 group-hover:border-accent",
        )}
      />
      <span className="text-[1.02rem] tracking-[-0.02em]">
        <span className="font-medium">머니프레임</span>
        <span className="font-light opacity-70">코치협회</span>
      </span>
    </Link>
  );
}
