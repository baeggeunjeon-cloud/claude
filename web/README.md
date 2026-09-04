# 머니프레임코치협회 홈페이지

돈을 바라보는 틀(벌기·쓰기·불리기·지키기)을 바꾸는 재무코칭 전문 협회의 반응형 웹사이트입니다.

## 기술 스택

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4**
- 폰트: **Pretendard 단일 서체** — 굵기(100·300·400·500·700)로 위계 표현.
  `image/`의 Pretendard OTF를 한국어+라틴 서브셋 woff2로 변환해
  `src/fonts/`에 자체 호스팅 (`next/font/local`), CDN 미사용.
- 디자인 시스템: `src/app/globals.css` — 따뜻한 화이트 · 온화한 먹색 · 절제된 청동 액센트.

## 실행

```bash
cd web
npm install        # 최초 1회
npm run dev        # 개발 서버 → http://localhost:3000
npm run build && npm run start   # 프로덕션
```

## 페이지 구조 (`src/app`)

| 경로 | 카테고리 |
|---|---|
| `/` | 홈 |
| `/money-frame` | 머니프레임이란 |
| `/about` | 협회소개 |
| `/programs` | 교육프로그램 |
| `/coaches` | 코치 찾기 (지역·방식 필터) |
| `/apply` | 강의·코칭 신청 (신청 폼) |
| `/activities` | 협회활동 |
| `/resources` | 자료실·소식 (유형 탭) |

## 콘텐츠 수정

모든 문구·데이터는 **예시(가안)** 입니다. 실제 정보로 교체할 곳:

- `src/lib/site.ts` — 협회명, 주소, 연락처, 설립연도 등
- `src/lib/content.ts` — 4대 축 설명, 교육과정, 코치 명단, 협회활동, 소식, FAQ, 연혁
- `public/media/` — 이미지·영상 (원본은 프로젝트 루트 `image/` 폴더)

## 참고

- 신청 폼(`/apply`)은 화면상 접수 확인만 표시하며 실제 전송 로직은 연결돼 있지 않습니다.
  (이메일/DB/구글폼 등 백엔드 연동 필요)
- 코치 프로필 사진 등 개인 이미지는 아직 플레이스홀더가 없습니다.
