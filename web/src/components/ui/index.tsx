import Link from "next/link";
import { cn } from "@/lib/cn";

/* ── 인라인 밑줄 링크 ───────────────────────────── */
export function TextLink({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = cn(
    "ln text-[0.95rem] font-medium text-ink underline-offset-4",
    className,
  );
  if (external || href.startsWith("http") || href.startsWith("mailto")) {
    return (
      <a href={href} className={cls}>
        {children}
        {external ? <span aria-hidden> ↗</span> : null}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ── 버튼 ──────────────────────────────────────── */
type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  tone?: "ink" | "paper";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  tone = "ink",
  className,
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-[1.05rem] text-[0.9rem] font-medium tracking-[0.01em] transition-opacity duration-200 hover:opacity-80";
  const styles =
    variant === "primary"
      ? tone === "paper"
        ? "bg-paper text-ink"
        : "bg-ink text-paper"
      : tone === "paper"
        ? "border border-paper/45 text-paper"
        : "border border-ink/25 text-ink";
  const external = href.startsWith("http") || href.startsWith("mailto");
  const cls = cn(base, styles, className);
  return external ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ── 섹션 헤더 ─────────────────────────────────── */
export function SectionHead({
  index,
  title,
  intro,
  className,
  align = "left",
}: {
  index?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {index ? (
        <span className="tnum block text-[0.9rem] font-light text-accent">
          {index}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium",
          index ? "mt-3" : "",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-2">{intro}</p>
      ) : null}
    </div>
  );
}
