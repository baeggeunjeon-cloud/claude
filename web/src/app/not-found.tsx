import { Container } from "@/components/Container";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="pt-16 sm:pt-[70px]">
      <div className="py-32 text-center sm:py-44">
        <p className="tnum text-[0.9rem] font-light text-accent">404</p>
        <h1 className="display mt-4 text-[clamp(1.6rem,3vw,2.4rem)]">
          찾으시는 페이지가 없습니다
        </h1>
        <p className="mt-4 text-[0.98rem] text-ink-2">
          주소가 바뀌었거나 삭제된 페이지일 수 있습니다.
        </p>
        <div className="mt-9">
          <Button href="/">홈으로 돌아가기</Button>
        </div>
      </div>
    </Container>
  );
}
