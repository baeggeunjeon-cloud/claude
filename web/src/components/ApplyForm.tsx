"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";

const TYPES = [
  { id: "personal", label: "개인 코칭", hint: "혼자 정리되지 않는 돈 문제를 코치와" },
  { id: "family", label: "가정 워크숍", hint: "부모·자녀가 함께 돈 약속 만들기" },
  { id: "coach", label: "코치 교육", hint: "머니프레임 코치 양성 과정 수강" },
  { id: "org", label: "단체·기관 강의", hint: "임직원·주민 대상 특강 및 프로그램" },
];

const field =
  "mt-2 w-full border-0 border-b border-line bg-transparent py-2.5 text-[0.98rem] text-ink placeholder:text-ink-3 focus:border-ink focus:outline-none";

export function ApplyForm() {
  const params = useSearchParams();
  const preset = params.get("coach");
  const [type, setType] = useState("personal");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border-t border-ink pt-10">
        <h2 className="text-[1.5rem] font-medium">신청이 접수되었습니다</h2>
        <p className="prose-body mt-4">
          1~2 영업일 안에 담당자가 남겨주신 연락처로 연락드립니다. 급한 문의는
          전화(02-6000-0000)로 주세요.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 border border-ink/25 px-6 py-3 text-[0.9rem] font-medium text-ink hover:bg-ink hover:text-paper"
        >
          새 신청서 작성
        </button>
        <p className="mt-6 text-[0.8rem] text-ink-3">
          예시용 가안 사이트입니다. 실제로 전송되지 않습니다.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-14"
    >
      <fieldset>
        <legend className="text-[1.15rem] font-medium">1. 어떤 신청인가요?</legend>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {TYPES.map((t) => (
            <label
              key={t.id}
              className={cn(
                "cursor-pointer border p-4 transition-colors",
                type === t.id
                  ? "border-ink bg-paper-2"
                  : "border-line hover:border-ink/40",
              )}
            >
              <span className="flex items-center gap-2.5">
                <input
                  type="radio"
                  name="type"
                  value={t.id}
                  checked={type === t.id}
                  onChange={() => setType(t.id)}
                  className="accent-[var(--ink)]"
                />
                <span className="text-[0.95rem] font-medium text-ink">
                  {t.label}
                </span>
              </span>
              <span className="mt-1.5 block pl-6 text-[0.82rem] text-ink-3">
                {t.hint}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-[1.15rem] font-medium">2. 연락처</legend>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="text-[0.85rem] font-medium text-ink">
              이름 <span className="text-accent">*</span>
            </span>
            <input required type="text" name="name" className={field} placeholder="홍길동" />
          </label>
          <label className="block">
            <span className="text-[0.85rem] font-medium text-ink">
              연락처 <span className="text-accent">*</span>
            </span>
            <input
              required
              type="tel"
              name="phone"
              className={field}
              placeholder="010-0000-0000"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="text-[0.85rem] font-medium text-ink">이메일</span>
            <input
              type="email"
              name="email"
              className={field}
              placeholder="name@example.com"
            />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-[1.15rem] font-medium">3. 내용</legend>
        {preset ? (
          <p className="mt-4 border-l-2 border-accent pl-3 text-[0.88rem] text-ink-2">
            선택한 코치: <strong className="text-ink">{preset}</strong>
          </p>
        ) : null}
        <label className="mt-5 block">
          <span className="text-[0.85rem] font-medium text-ink">
            지금 가장 고민되는 점을 편하게 적어주세요
          </span>
          <textarea
            name="message"
            rows={4}
            className={field}
            placeholder="예) 맞벌이인데 지출을 두고 배우자와 자주 부딪힙니다. 함께 기준을 세우고 싶어요."
          />
        </label>
        <label className="mt-6 block">
          <span className="text-[0.85rem] font-medium text-ink">희망 지역·방식</span>
          <input
            type="text"
            name="pref"
            className={field}
            placeholder="예) 서울 / 온라인 가능"
          />
        </label>
      </fieldset>

      <label className="flex items-start gap-2.5">
        <input required type="checkbox" name="agree" className="mt-1 accent-[var(--ink)]" />
        <span className="text-[0.85rem] leading-relaxed text-ink-2">
          상담 목적의 개인정보 수집·이용에 동의합니다. 접수된 정보는 상담 완료 후
          6개월간 보관 후 파기됩니다.
        </span>
      </label>

      <button
        type="submit"
        className="w-full bg-ink px-8 py-4 text-[0.95rem] font-medium text-paper transition-opacity hover:opacity-80 sm:w-auto sm:px-12"
      >
        신청서 보내기
      </button>
    </form>
  );
}
