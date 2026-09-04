import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHead, Button } from "@/components/ui";
import { ACTIVITIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "협회활동",
  description:
    "지역사회 무료 코칭, 학교 경제교육 지원, 연구 발간과 코치 컨퍼런스 등 협회의 활동을 소개합니다.",
};

const AREAS = [
  ["지역사회", "자립준비청년·한부모 가정 등에 그룹 코칭을 무료로 제공합니다."],
  ["교육기부", "중·고등학교 자유학기제 경제 수업을 코치들이 재능기부로 진행합니다."],
  ["연구", "가계의 머니프레임 실태를 조사하고 연차 리포트로 공개합니다."],
  ["코치 커뮤니티", "사례 슈퍼비전과 컨퍼런스로 코칭의 질과 윤리를 함께 지킵니다."],
];

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        kicker="협회활동"
        title="배운 것을 필요한 곳에 되돌립니다"
        lead="머니프레임 코칭은 개인의 문제 해결에서 멈추지 않습니다. 협회는 코치들과 함께 지역과 학교, 연구의 자리에서 활동합니다."
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHead title="활동 영역" />
          <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-x-16">
            {AREAS.map(([t, d]) => (
              <div key={t} className="border-t border-line-2 pt-5">
                <h2 className="text-[1.2rem] font-medium">{t}</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <SectionHead title="최근 활동" />
          <div className="mt-16 space-y-20 sm:space-y-28">
            {ACTIVITIES.map((a, i) => (
              <article
                key={a.title}
                className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20"
              >
                {a.image ? (
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ) : null}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="tnum text-[0.84rem] text-ink-3">
                    {a.date} · {a.category}
                  </p>
                  <h3 className="mt-3 text-[1.5rem] font-medium leading-snug">
                    {a.title}
                  </h3>
                  <p className="prose-body mt-4 text-[1rem]">{a.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-2 py-24 sm:py-32">
        <Container size="narrow">
          <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium leading-snug">
            함께할 지자체·학교·기관을 찾습니다
          </h2>
          <p className="prose-body mt-5">
            지역 주민 프로그램, 학교 수업, 사내 교육 등 협력 제안을 환영합니다.
            후원으로 무료 코칭 사업에 함께하실 수도 있습니다.
          </p>
          <div className="mt-9">
            <Button href="/apply">협력·후원 문의</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
