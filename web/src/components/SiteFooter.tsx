import Link from "next/link";
import { Container } from "./Container";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-deep text-paper">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="block h-[15px] w-[15px] border border-paper/40" />
              <span className="text-[1.05rem] tracking-[-0.02em]">
                <span className="font-medium">머니프레임</span>
                <span className="font-light opacity-70">코치협회</span>
              </span>
            </div>
            <p className="measure-sm mt-6 text-[0.92rem] font-light leading-relaxed text-paper/60">
              벌기·쓰기·불리기·지키기의 네 축으로 개인과 가정의 돈 습관을 다시
              설계하는 머니프레임 코치를 양성하고 인증합니다.
            </p>
          </div>

          <nav aria-label="바닥글 메뉴">
            <ul className="space-y-3">
              {NAV.filter((n) => n.href !== "/").map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9rem] font-light text-paper/70 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3 text-[0.9rem] font-light text-paper/70">
            <p className="text-paper/85">{SITE.address}</p>
            <p>
              {SITE.phone} · {" "}
              <a href={`mailto:${SITE.email}`} className="hover:text-paper">
                {SITE.email}
              </a>
            </p>
            <p>{SITE.hours}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-1.5 border-t border-paper/12 pt-7 text-[0.78rem] font-light text-paper/45 sm:flex-row sm:justify-between">
          <p>
            {SITE.bizName} · 고유번호 {SITE.bizNumber} · 이사장 홍길동
          </p>
          <p>© {new Date().getFullYear()} 머니프레임코치협회 · 예시용 가안</p>
        </div>
      </Container>
    </footer>
  );
}
