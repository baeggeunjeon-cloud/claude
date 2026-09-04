import localFont from "next/font/local";

/* 로컬 Pretendard (사용자 제공 폰트) — 서브셋 woff2 */
export const pretendard = localFont({
  src: [
    { path: "../fonts/Pretendard-100.woff2", weight: "100", style: "normal" },
    { path: "../fonts/Pretendard-300.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Pretendard-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Pretendard-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Pretendard-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-pretendard",
  display: "swap",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "system-ui",
    "Apple SD Gothic Neo",
    "sans-serif",
  ],
});
