"use client";

import { useState } from "react";
import { Container } from "./Container";
import { RESOURCES } from "@/lib/content";
import { cn } from "@/lib/cn";

const TABS = ["전체", "공지", "칼럼", "자료", "언론"] as const;

export function ResourceList() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("전체");
  const list = RESOURCES.filter((r) => tab === "전체" || r.type === tab);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                "pb-1 text-[0.9rem] transition-colors",
                tab === t
                  ? "border-b border-ink text-ink"
                  : "border-b border-transparent text-ink-3 hover:text-ink",
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <ul className="mt-10">
          {list.map((r) => (
            <li key={r.title}>
              <article className="grid gap-2 border-t border-line py-9 last:border-b sm:grid-cols-[8rem_1fr] sm:gap-12">
                <div className="text-[0.82rem] text-ink-3">
                  <span className="font-medium text-accent">{r.type}</span>
                  <span className="tnum mt-1 block">{r.date}</span>
                </div>
                <div>
                  <h2 className="text-[1.3rem] font-medium leading-snug text-ink">
                    {r.title}
                  </h2>
                  <p className="measure mt-2 text-[0.95rem] leading-relaxed text-ink-2">
                    {r.summary}
                  </p>
                  <p className="mt-3 text-[0.8rem] text-ink-3">
                    {r.type === "자료"
                      ? "다운로드 링크는 준비 중입니다."
                      : "본문은 준비 중입니다."}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-[0.8rem] text-ink-3">
          예시용 가안 콘텐츠입니다. 실제 게시물로 교체될 예정입니다.
        </p>
      </Container>
    </section>
  );
}
