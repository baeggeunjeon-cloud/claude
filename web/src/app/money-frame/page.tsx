import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Button, SectionHead } from "@/components/ui";
import { PILLARS } from "@/lib/content";

export const metadata: Metadata = {
  title: "머니프레임이란",
  description:
    "머니프레임은 벌기·쓰기·불리기·지키기 네 가지 축으로 이루어진, 사람마다 다른 '돈을 대하는 틀'입니다.",
};

export default function MoneyFramePage() {
  return (
    <>
      <PageHeader
        kicker="메인 · 머니프레임이란"
        title="머니프레임 — 당신이 돈을 담는 틀"
        lead="숫자가 아니라 틀이 문제입니다. 같은 소득이어도 어디서 벌어 무엇에 쓰고, 어떻게 불려 무엇으로 지키느냐에 따라 10년 뒤가 달라집니다."
      />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <div>
              <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium leading-snug">
                틀은 대부분 무의식적으로 만들어집니다
              </h2>
              <div className="prose-body mt-6">
                <p>
                  우리는 부모의 돈 습관, 첫 직장의 급여 구조, 주변의 소비 문화
                  속에서 자기도 모르게 돈을 대하는 방식을 익힙니다. 이렇게 굳어진
                  틀은 편하지만, 상황이 바뀌면 삶을 흔드는 원인이 되기도 합니다.
                </p>
                <p>
                  머니프레임 코칭은 이 틀을 눈에 보이게 꺼내 놓는 것에서
                  시작합니다. 판단하거나 고치려 들지 않고, 먼저 지금의 틀을 함께
                  그려 봅니다. 바꿀지 말지는 그다음 문제입니다.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden lg:self-start">
              <Image
                src="/media/planning-journal.png"
                alt="펼쳐진 노트와 만년필, 계산기"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <SectionHead
            title="벌기 · 쓰기 · 불리기 · 지키기"
            intro="네 축은 서로 맞물려 돌아갑니다. 하나만 잘해서는 틀이 완성되지 않습니다."
          />

          <div className="mt-20 space-y-24 sm:space-y-32">
            {PILLARS.map((p, i) => (
              <article
                key={p.key}
                className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.ko}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="tnum text-[0.9rem] font-light text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-[1.6rem] font-medium">
                    {p.ko}{" "}
                    <span className="font-light text-ink-3">{p.en}</span>
                  </h3>
                  <p className="mt-5 text-[1.15rem] font-medium leading-snug text-ink">
                    {p.question}
                  </p>
                  <p className="prose-body mt-4">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-2 py-24 sm:py-32">
        <Container size="narrow">
          <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium leading-snug">
            중요한 것은 네 축의 균형입니다
          </h2>
          <div className="prose-body mt-6">
            <p>
              버는 데만 집중하면 삶이 소진되고, 지키는 데만 매달리면 자산이 자라지
              않습니다. 쓰기를 억누르기만 하면 오래가지 못하고, 불리기에 취하면
              위험이 쌓입니다.
            </p>
            <p>
              머니프레임 코칭은 어느 한 축의 정답을 주지 않습니다. 지금 당신의 네
              축이 어떻게 짜여 있는지 보고, 가장 먼저 손봐야 할 곳을 함께 찾습니다.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/coaches">코치와 진단하기</Button>
            <Button href="/resources" variant="outline">
              자가진단 워크시트
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
