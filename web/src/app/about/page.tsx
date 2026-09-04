import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHead, TextLink } from "@/components/ui";
import { SITE } from "@/lib/site";
import { TIMELINE } from "@/lib/content";

export const metadata: Metadata = {
  title: "협회소개",
  description: "머니프레임코치협회의 미션, 원칙, 연혁, 조직과 오시는 길을 안내합니다.",
};

const VALUES = [
  {
    t: "판단하지 않습니다",
    d: "돈에 관한 선택에는 옳고 그름보다 맥락이 있습니다. 코치는 평가 대신 이해에서 출발합니다.",
  },
  {
    t: "팔지 않습니다",
    d: "협회와 인증 코치는 금융상품을 권유하거나 중개하지 않습니다. 이해 상충이 없는 자리를 지킵니다.",
  },
  {
    t: "습관을 다룹니다",
    d: "한 번의 정보 전달이 아니라, 스스로 이어갈 수 있는 루틴이 남도록 코칭합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="협회소개"
        title="돈을 대하는 방식을 바꾸는 일을, 제대로 하기 위해"
        lead={`${SITE.name}는 ${SITE.established}년 코칭 연구모임에서 출발해, 재무코칭의 방법을 표준화하고 코치를 인증하는 비영리 사단법인으로 운영되고 있습니다.`}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium leading-snug">
                모든 사람이 자기 돈의 기준을 스스로 세우도록
              </h2>
              <div className="prose-body mt-6">
                <p>
                  재무 정보는 어느 때보다 많지만, 정작 &lsquo;나에게 맞는
                  선택&rsquo;은 더 어려워졌습니다. 협회는 정보의 양이 아니라
                  판단의 틀이 문제라고 봅니다.
                </p>
                <p>
                  우리는 사람의 이야기에서 출발하는 재무코칭의 방법을 연구하고, 그
                  방법을 신뢰할 수 있게 전할 코치를 길러냅니다.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:self-start">
              <Image
                src="/media/family-together.png"
                alt="식탁에 둘러앉아 가계부를 함께 보는 가족"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <SectionHead title="일하는 원칙" />
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {VALUES.map((v) => (
              <div key={v.t} className="border-t border-line-2 pt-6">
                <h3 className="text-[1.2rem] font-medium">{v.t}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-2">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-2 py-24 sm:py-32">
        <Container>
          <SectionHead title="걸어온 길" />
          <ol className="mt-14">
            {TIMELINE.map((row) => (
              <li
                key={row.year}
                className="grid gap-2 border-t border-line py-7 last:border-b sm:grid-cols-[7rem_1fr] sm:gap-12"
              >
                <span className="tnum text-[1.15rem] font-light text-accent">
                  {row.year}
                </span>
                <span className="text-[1rem] leading-relaxed text-ink-2">
                  {row.text}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-deep py-24 text-paper sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="text-[0.82rem] font-medium tracking-[0.02em] text-paper/50">
                조직
              </h2>
              <ul className="mt-6 space-y-4 text-[0.98rem] font-light text-paper/80">
                {[
                  ["이사장", "홍길동"],
                  ["운영위원회", "교육 · 인증 · 윤리 · 연구 4개 분과"],
                  ["지부", "수도권 · 영남 · 호남 · 충청"],
                  ["사무국", "상근 4명"],
                ].map(([k, v]) => (
                  <li
                    key={k}
                    className="flex justify-between gap-6 border-b border-paper/12 pb-4 last:border-0"
                  >
                    <span className="text-paper/50">{k}</span>
                    <span className="text-right">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[0.82rem] font-medium tracking-[0.02em] text-paper/50">
                오시는 길
              </h2>
              <dl className="mt-6 space-y-4 text-[0.98rem] font-light text-paper/80">
                <div>
                  <dt className="text-paper/50">주소</dt>
                  <dd className="mt-1">{SITE.address}</dd>
                </div>
                <div>
                  <dt className="text-paper/50">전화 · 이메일</dt>
                  <dd className="mt-1">
                    {SITE.phone} · {SITE.email}
                  </dd>
                </div>
                <div>
                  <dt className="text-paper/50">운영 시간</dt>
                  <dd className="mt-1">{SITE.hours}</dd>
                </div>
              </dl>
              <div className="mt-8">
                <TextLink href="/apply" className="!text-paper">
                  협력·후원 문의
                </TextLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
