import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHead } from "@/components/ui";
import { ApplyForm } from "@/components/ApplyForm";
import { SITE } from "@/lib/site";
import { FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "강의·코칭 신청",
  description:
    "개인 코칭, 가정 워크숍, 코치 교육, 단체·기관 강의를 한 곳에서 신청하고 문의하세요.",
};

const STEPS = [
  ["01", "신청서 접수", "아래 양식을 작성해 보내면 1~2 영업일 안에 담당자가 연락합니다."],
  ["02", "무료 오리엔테이션", "30분 통화로 목표와 일정, 적합한 코치·과정을 맞춰봅니다."],
  ["03", "시작", "일정과 비용에 합의하면 첫 회기 또는 과정 일정을 확정합니다."],
];

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        kicker="강의·코칭 신청"
        title="어떤 도움이 필요하신가요?"
        lead="개인 코칭부터 기관 강의까지, 한 양식으로 접수합니다. 지금 결정하지 않아도 됩니다. 먼저 이야기부터 나눠요."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHead title="진행 절차" />
          <ol className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-12">
            {STEPS.map(([n, t, d]) => (
              <li key={n} className="border-t border-line-2 pt-5">
                <span className="tnum block text-[0.9rem] font-light text-accent">
                  {n}
                </span>
                <h3 className="mt-2 text-[1.1rem] font-medium">{t}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-2">
                  {d}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.4fr_0.9fr] lg:gap-24">
            <Suspense
              fallback={<div className="text-ink-3">양식을 불러오는 중…</div>}
            >
              <ApplyForm />
            </Suspense>

            <aside>
              <h2 className="text-[0.82rem] font-medium tracking-[0.02em] text-ink-3">
                직접 연락
              </h2>
              <dl className="mt-5 space-y-4 text-[0.95rem]">
                <div>
                  <dt className="text-ink-3">전화</dt>
                  <dd className="mt-1 text-ink">{SITE.phone}</dd>
                </div>
                <div>
                  <dt className="text-ink-3">이메일</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${SITE.email}`}
                      className="ln text-ink underline-offset-4"
                    >
                      {SITE.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-3">상담 가능 시간</dt>
                  <dd className="mt-1 text-ink">{SITE.hours}</dd>
                </div>
              </dl>

              <div className="mt-12 border-t border-line pt-10">
                <h2 className="text-[1.15rem] font-medium">자주 묻는 질문</h2>
                <dl className="mt-6 space-y-6">
                  {FAQS.map((f) => (
                    <div key={f.q}>
                      <dt className="text-[0.92rem] font-medium text-ink">
                        {f.q}
                      </dt>
                      <dd className="mt-2 text-[0.88rem] leading-relaxed text-ink-2">
                        {f.a}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
