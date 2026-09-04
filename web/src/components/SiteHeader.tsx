"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroExpanded, setHeroExpanded] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    setHeroExpanded(false);
    const onHero = (e: Event) => {
      setHeroExpanded(Boolean((e as CustomEvent).detail));
    };
    window.addEventListener("hero:expanded", onHero as EventListener);
    return () =>
      window.removeEventListener("hero:expanded", onHero as EventListener);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = isHome && !scrolled && !open && !heroExpanded;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        light
          ? "bg-transparent"
          : "border-b border-line bg-paper/85 backdrop-blur-md",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-[70px]">
        <Logo tone={light ? "paper" : "ink"} />

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="주요 메뉴"
        >
          {NAV.map((item) => (
            <div key={item.label} className="group relative py-5">
              <Link
                href={item.href}
                className={cn(
                  "text-[0.9rem] transition-colors",
                  light
                    ? "text-paper/85 hover:text-paper"
                    : isActive(item.href)
                      ? "text-accent"
                      : "text-ink-2 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 border border-line bg-paper opacity-0 shadow-[0_20px_50px_-28px_rgba(28,26,23,0.45)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block border-b border-line px-4 py-3 last:border-0 hover:bg-paper-2"
                    >
                      <span className="block text-[0.88rem] font-medium text-ink">
                        {c.label}
                      </span>
                      {c.desc ? (
                        <span className="mt-0.5 block text-[0.76rem] text-ink-3">
                          {c.desc}
                        </span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <Link
            href="/apply"
            className={cn(
              "ml-1 border px-4 py-2 text-[0.85rem] transition-colors",
              light
                ? "border-paper/40 text-paper hover:bg-paper hover:text-ink"
                : "border-ink/25 text-ink hover:bg-ink hover:text-paper",
            )}
          >
            신청·문의
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="relative block h-4 w-6">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={cn(
                  "absolute left-0 h-[1.5px] w-full transition-all duration-300",
                  open || !light ? "bg-ink" : "bg-paper",
                  i === 0 && (open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"),
                  i === 1 && (open ? "opacity-0" : "top-1/2 -translate-y-1/2"),
                  i === 2 &&
                    (open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"),
                )}
              />
            ))}
          </span>
        </button>
      </Container>
    </header>

    {/* 모바일 메뉴 — header(backdrop-filter) 밖에 두어야 fixed 포지셔닝이 뷰포트 기준으로 동작 */}
    <div
      id="mobile-nav"
      className={cn(
        "fixed inset-0 z-40 overflow-y-auto bg-paper pt-16 sm:pt-[70px] lg:hidden",
        open ? "block" : "hidden",
      )}
    >
      <Container className="py-8">
        <nav aria-label="모바일 메뉴">
          {NAV.map((item) => (
            <div key={item.label} className="border-b border-line py-2">
              <Link
                href={item.href}
                className={cn(
                  "block py-3 text-[1.1rem] font-medium",
                  isActive(item.href) ? "text-accent" : "text-ink",
                )}
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="pb-2 pl-1">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block py-2 text-[0.95rem] text-ink-2"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <Link
          href="/apply"
          className="mt-8 flex items-center justify-center bg-ink px-5 py-4 text-[0.95rem] font-medium text-paper"
        >
          강의·코칭 신청
        </Link>
      </Container>
    </div>
    </>
  );
}
