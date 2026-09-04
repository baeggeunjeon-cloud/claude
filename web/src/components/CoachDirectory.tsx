"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { COACHES } from "@/lib/content";
import { cn } from "@/lib/cn";

const REGIONS = ["전체", "서울", "경기", "부산", "대구", "광주"];
const FORMATS = ["전체", "대면", "온라인"];

export function CoachDirectory() {
  const [region, setRegion] = useState("전체");
  const [format, setFormat] = useState("전체");

  const list = useMemo(
    () =>
      COACHES.filter(
        (c) =>
          (region === "전체" || c.region === region) &&
          (format === "전체" || c.formats.includes(format)),
      ),
    [region, format],
  );

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-7 sm:flex-row sm:gap-16">
          <Filter label="지역" options={REGIONS} value={region} onChange={setRegion} />
          <Filter label="방식" options={FORMATS} value={format} onChange={setFormat} />
        </div>

        <p className="tnum mt-10 text-[0.84rem] text-ink-3">
          {list.length}명의 코치
        </p>

        <div className="mt-2">
          {list.map((c) => (
            <article
              key={c.name}
              className="grid gap-6 border-t border-line py-10 last:border-b sm:grid-cols-[1fr_1.6fr] sm:gap-14"
            >
              <div>
                <h2 className="text-[1.4rem] font-medium">{c.name}</h2>
                <p className="mt-1.5 text-[0.85rem] text-accent">{c.cert}</p>
                <p className="mt-3 text-[0.84rem] text-ink-3">
                  {c.region} · {c.formats.join("·")} · {c.since}년부터 활동
                </p>
              </div>
              <div>
                <p className="text-[0.98rem] leading-relaxed text-ink-2">
                  {c.bio}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5">
                  {c.focus.map((f) => (
                    <li key={f} className="text-[0.85rem] text-ink-3">
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href={`/apply?coach=${encodeURIComponent(c.name)}`}
                    className="ln text-[0.9rem] font-medium text-ink underline-offset-4"
                  >
                    오리엔테이션 신청
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {list.length === 0 ? (
          <p className="mt-12 text-[0.95rem] text-ink-2">
            조건에 맞는 코치가 아직 없습니다. 조건을 넓히거나{" "}
            <Link href="/apply" className="ln text-ink">
              직접 문의
            </Link>
            해 주세요.
          </p>
        ) : null}
      </Container>
    </section>
  );
}

function Filter({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <span className="text-[0.8rem] font-medium tracking-[0.02em] text-ink-3">
        {label}
      </span>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={cn(
              "pb-1 text-[0.9rem] transition-colors",
              value === o
                ? "border-b border-ink text-ink"
                : "border-b border-transparent text-ink-3 hover:text-ink",
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
