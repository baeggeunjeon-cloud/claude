import { Container } from "./Container";

export function PageHeader({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="border-b border-line pt-16 sm:pt-[70px]">
      <Container className="pt-16 pb-14 sm:pt-24 sm:pb-20">
        <p className="text-[0.82rem] font-medium tracking-[0.02em] text-ink-3">
          {kicker}
        </p>
        <h1 className="display mt-6 max-w-4xl text-[clamp(2rem,4.6vw,3.5rem)]">
          {title}
        </h1>
        {lead ? (
          <p className="measure mt-8 text-[1.05rem] leading-relaxed text-ink-2">
            {lead}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
