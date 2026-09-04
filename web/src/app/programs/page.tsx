import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Button, SectionHead } from "@/components/ui";
import { PROGRAMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "교육프로그램",
  description:
    "머니프레임 코치가 되는 3단계 과정(파운데이션·프랙티셔너·인증)과 가정을 위한 워크숍을 안내합니다.",
};

const PATH = [
  ["01", "파운데이션", "네 축과 코칭 대화의 기본기를 익히고, 나의 돈 습관을 먼저 진단합니다."],
  ["02", "프랙티셔너", "실제 고객을 대상으로 8회기 코칭을 설계하고 진행하며 슈퍼비전을 받습니다."],
  ["03", "인증 (CMFC)", "코칭 시수·사례·윤리 심사를 통과하면 협회 인증 코치 자격이 부여됩니다."],
  ["04", "보수교육", "연 1회 사례 슈퍼비전으로 코칭의 질과 자격을 유지합니다."],
];

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        kicker="교육프로그램"
        title="사람의 이야기를 듣는 재무코치로"
        lead="머니프레임 코치는 3단계로 성장합니다. 재무 전공이나 자격은 필요하지 않습니다. 필요한 것은 사람에 대한 관심과 꾸준함입니다."
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHead title="성장 경로" />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {PATH.map(([n, name, desc]) => (
              <li key={name} className="border-t border-line-2 pt-5">
                <span className="tnum block text-[0.9rem] font-light text-accent">
                  {n}
                </span>
                <h3 className="mt-2 text-[1.15rem] font-medium">{name}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-2">
                  {desc}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <SectionHead title="과정 안내" />
          <div className="mt-16 space-y-16 sm:space-y-24">
            {PROGRAMS.map((p) => (
              <article
                key={p.slug}
                className="grid gap-10 border-t border-line pt-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20"
              >
                <div>
                  <span className="text-[0.85rem] font-medium text-accent">
                    {p.level}
                  </span>
                  <h3 className="mt-2 text-[1.6rem] font-medium leading-snug">
                    {p.title}
                  </h3>
                  <p className="prose-body mt-5 text-[1rem]">{p.summary}</p>
                  <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-[0.86rem]">
                    {[
                      ["교육 시간", p.hours],
                      ["방식", p.format],
                      ["대상", p.audience],
                      ["수강료", p.fee],
                    ].map(([k, v]) => (
                      <div key={k} className="border-t border-line pt-2.5">
                        <dt className="text-ink-3">{k}</dt>
                        <dd className="mt-1 text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <h4 className="text-[0.82rem] font-medium tracking-[0.02em] text-ink-3">
                    수료 시 할 수 있는 것
                  </h4>
                  <ul className="mt-5 space-y-4">
                    {p.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex gap-3.5 text-[0.98rem] leading-relaxed text-ink-2"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.6em] h-px w-4 shrink-0 bg-accent"
                        />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9">
                    <Button href="/apply">이 과정 신청하기</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-2 py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium leading-snug">
                코치가 아니어도, 가정에서 시작할 수 있습니다
              </h2>
              <p className="prose-body mt-6">
                부모와 자녀가 함께하는 반나절 워크숍에서 보드게임과 대화 카드로
                우리 집의 돈 약속을 만듭니다.
              </p>
              <div className="mt-9">
                <Button href="/apply" variant="outline">
                  가정 워크숍 문의
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/media/boardgame-family.png"
                alt="보드게임으로 경제를 배우는 가족"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
