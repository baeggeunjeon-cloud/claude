import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button, SectionHead, TextLink } from "@/components/ui";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { PILLARS, PROGRAMS, RESOURCES } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ── 스크롤 확장 히어로 ─────────────────── */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/media/hero-rooftop.mp4"
        posterSrc="/media/hero-frame-city.png"
        bgImageSrc="/media/hero-frame-city.png"
        title="머니 프레임"
        date="MONEY FRAME COACH ASSOCIATION"
        scrollToExpand="스크롤하여 펼치기"
      >
        <div className="mx-auto max-w-3xl">
          <p className="display text-[clamp(1.5rem,3.2vw,2.5rem)] text-ink">
            머니프레임은 돈을 담는 틀입니다. 어디서 벌어 무엇에 쓰고, 어떻게 불려
            무엇으로 지키는지 — 그 틀을 다시 그리는 일을 돕습니다.
          </p>
          <p className="prose-body mt-8">
            머니프레임코치협회는 돈을 대하는 태도의 변화를 다루는 코칭을
            연구하고, 그 방법을 신뢰할 수 있게 전할 코치를 길러냅니다. 지식을
            더하는 교육이 아니라, 습관이 바뀌도록 곁에서 돕는 일입니다.
          </p>
          <div className="mt-10">
            <TextLink href="/money-frame">머니프레임이란</TextLink>
          </div>
        </div>
      </ScrollExpandMedia>

      {/* ── 네 개의 축 ────────────────────────── */}
      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <SectionHead
            title="네 개의 축"
            intro="한쪽으로 치우친 틀은 언젠가 흔들립니다. 코칭은 네 축의 균형에서 시작합니다."
          />

          <div className="mt-16 sm:mt-24">
            {PILLARS.map((p, i) => (
              <article
                key={p.key}
                className="grid items-start gap-6 border-t border-line py-10 last:border-b sm:grid-cols-[5.5rem_1fr_auto] sm:gap-10 sm:py-14"
              >
                <div>
                  <span className="tnum block text-[0.9rem] font-light text-accent">
                    0{i + 1}
                  </span>
                  <span className="mt-2 block text-[1.05rem] font-medium text-ink">
                    {p.ko}
                  </span>
                  <span className="block text-[0.85rem] font-light text-ink-3">
                    {p.en}
                  </span>
                </div>

                <div className="measure">
                  <p className="text-[clamp(1.15rem,1.8vw,1.4rem)] font-medium leading-snug text-ink">
                    {p.question}
                  </p>
                  <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-2">
                    {p.body}
                  </p>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-square sm:w-40 lg:w-52">
                  <Image
                    src={p.image}
                    alt={p.ko}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 13rem"
                  />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 협회가 하는 일 ────────────────────── */}
      <section className="bg-paper-2 py-24 sm:py-32">
        <Container>
          <SectionHead title="협회가 하는 일" />
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {[
              {
                t: "코치를 양성합니다",
                d: "입문부터 인증까지 3단계 과정으로, 사람의 이야기를 듣고 질문하는 재무코칭 전문가를 길러냅니다.",
                href: "/programs",
                cta: "교육프로그램",
              },
              {
                t: "코치와 사람을 잇습니다",
                d: "지역·주제·방식으로 검증된 인증 코치를 찾고, 무료 오리엔테이션으로 시작할 수 있게 연결합니다.",
                href: "/coaches",
                cta: "코치 찾기",
              },
              {
                t: "연구하고 나눕니다",
                d: "가계의 머니프레임을 조사하고, 학교와 지역에서 경제교육을 재능기부로 이어갑니다.",
                href: "/activities",
                cta: "협회활동",
              },
            ].map((c) => (
              <div key={c.t} className="border-t border-line-2 pt-6">
                <h3 className="text-[1.2rem] font-medium">{c.t}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-2">
                  {c.d}
                </p>
                <div className="mt-6">
                  <TextLink href={c.href}>{c.cta}</TextLink>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 지표 ─────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-2 gap-y-12 border-y border-line py-14 sm:grid-cols-4">
            {[
              ["2019", "설립"],
              ["320", "활동 중인 인증 코치"],
              ["1,200", "누적 수료 코치"],
              ["9,000", "연간 코칭 이용자"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="tnum text-[clamp(2.2rem,4vw,3rem)] font-light text-ink">
                  {n}
                </div>
                <div className="mt-2 text-[0.85rem] text-ink-3">{l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 프로그램 ─────────────────────────── */}
      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead title="코치가 되는 길" className="max-w-none" />
            <TextLink href="/programs">전체 과정</TextLink>
          </div>
          <div className="mt-14">
            {PROGRAMS.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href="/programs"
                className="group grid gap-2 border-t border-line py-8 last:border-b sm:grid-cols-[7rem_1fr_7rem] sm:items-baseline sm:gap-10"
              >
                <span className="text-[0.85rem] font-medium text-accent">
                  {p.level}
                </span>
                <span>
                  <span className="text-[1.2rem] font-medium text-ink transition-colors group-hover:text-accent">
                    {p.title}
                  </span>
                  <span className="measure mt-2 block text-[0.94rem] leading-relaxed text-ink-2">
                    {p.summary}
                  </span>
                </span>
                <span className="text-[0.84rem] text-ink-3 sm:text-right">
                  {p.hours}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 코칭 안내 ────────────────────────── */}
      <section className="bg-paper-2 py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium leading-snug">
                혼자 정리되지 않는 돈 문제, 코치와 함께 봅니다
              </h2>
              <p className="prose-body mt-6">
                신혼 맞벌이의 지출 갈등, 프리랜서의 불규칙한 소득, 은퇴 전환기의
                인출 계획 — 상황에 맞는 인증 코치를 찾아 30분 무료 오리엔테이션으로
                시작해 보세요.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/coaches">코치 찾기</Button>
                <Button href="/apply" variant="outline">
                  코칭 신청
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/media/coaching-session.png"
                alt="식탁에서 대화하며 진행되는 재무 코칭"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 소식 ─────────────────────────────── */}
      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead title="협회 소식" className="max-w-none" />
            <TextLink href="/resources">모두 보기</TextLink>
          </div>
          <ul className="mt-14">
            {RESOURCES.slice(0, 4).map((r) => (
              <li key={r.title}>
                <Link
                  href="/resources"
                  className="group grid gap-1.5 border-t border-line py-7 last:border-b sm:grid-cols-[7rem_5rem_1fr] sm:items-baseline sm:gap-8"
                >
                  <span className="tnum text-[0.84rem] text-ink-3">{r.date}</span>
                  <span className="text-[0.8rem] font-medium text-accent">
                    {r.type}
                  </span>
                  <span className="text-[1rem] text-ink transition-colors group-hover:text-accent">
                    {r.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── 맺음 ─────────────────────────────── */}
      <section className="bg-deep py-24 text-center text-paper sm:py-36">
        <Container>
          <h2 className="display mx-auto max-w-[18ch] text-[clamp(1.7rem,3.4vw,2.7rem)] text-paper">
            돈의 틀을 바꾸는 일에 함께하시겠어요?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/apply" tone="paper">
              강의·코칭 신청
            </Button>
            <Button href="/about" variant="outline" tone="paper">
              협회 소개
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
