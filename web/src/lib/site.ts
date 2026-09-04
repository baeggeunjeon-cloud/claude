export const SITE = {
  name: "머니프레임코치협회",
  nameEn: "Korea Money Frame Coach Association",
  tagline: "돈을 바라보는 틀을 바꿉니다",
  established: 2019,
  address: "서울특별시 영등포구 여의대로 108, 12층 (여의도동)",
  email: "office@moneyframe.or.kr",
  phone: "02-6000-0000",
  hours: "평일 10:00–18:00 (점심 12:30–13:30)",
  bizName: "사단법인 머니프레임코치협회",
  bizNumber: "000-00-00000",
} as const;

export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  {
    label: "메인",
    href: "/",
    children: [
      { label: "홈", href: "/", desc: "협회 첫 화면" },
      {
        label: "머니프레임이란",
        href: "/money-frame",
        desc: "벌기·쓰기·불리기·지키기의 네 축",
      },
    ],
  },
  { label: "협회소개", href: "/about" },
  { label: "교육프로그램", href: "/programs" },
  { label: "코치 찾기", href: "/coaches" },
  { label: "강의·코칭 신청", href: "/apply" },
  { label: "협회활동", href: "/activities" },
  { label: "자료실·소식", href: "/resources" },
];
