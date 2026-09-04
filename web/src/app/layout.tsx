import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "@/lib/fonts";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://moneyframe.or.kr"),
  title: {
    default: "머니프레임코치협회 | 돈을 대하는 태도를 바꾸는 코칭",
    template: "%s — 머니프레임코치협회",
  },
  description:
    "머니프레임코치협회는 벌기·쓰기·불리기·지키기의 네 축으로 개인과 가정의 돈 습관을 다시 설계하는 머니프레임 코치를 양성하고 인증하는 전문 협회입니다.",
  keywords: [
    "머니프레임",
    "머니프레임코치협회",
    "재무코칭",
    "금융교육",
    "돈 습관",
    "재무설계 코치 양성",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "머니프레임코치협회",
    title: "머니프레임코치협회",
    description: "벌기·쓰기·불리기·지키기 — 돈을 대하는 태도를 바꾸는 코칭.",
    images: ["/media/hero-frame-city.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          본문 바로가기
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
