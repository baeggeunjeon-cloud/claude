/* 예시(가안) 콘텐츠 — 실제 협회 정보로 교체 예정 */

export type Pillar = {
  key: "earn" | "spend" | "grow" | "protect";
  en: string;
  ko: string;
  question: string;
  body: string;
  image: string;
};

export const PILLARS: Pillar[] = [
  {
    key: "earn",
    en: "Make",
    ko: "벌기",
    question: "나는 어떤 방식으로 소득을 만드는가?",
    body: "노동 소득에만 기대고 있는지, 소득의 구조와 성장 곡선을 스스로 설명할 수 있는지 살핍니다. 커리어와 부업, 사업 소득까지 하나의 그림으로 연결합니다.",
    image: "/media/pillar-earn.png",
  },
  {
    key: "spend",
    en: "Spend",
    ko: "쓰기",
    question: "내 지출은 내 가치와 같은 방향인가?",
    body: "가계부를 넘어, 무엇에 돈을 쓸 때 만족하고 무엇에 후회하는지 패턴을 읽습니다. 참는 절약이 아니라 우선순위를 다시 세우는 지출을 설계합니다.",
    image: "/media/pillar-spend.png",
  },
  {
    key: "grow",
    en: "Grow",
    ko: "불리기",
    question: "돈이 스스로 일하게 만들고 있는가?",
    body: "위험을 감당할 수 있는 범위 안에서 자산이 시간과 함께 커지도록 원칙을 만듭니다. 유행이 아닌, 오래 지킬 수 있는 나만의 투자 규칙을 세웁니다.",
    image: "/media/growth-blocks.png",
  },
  {
    key: "protect",
    en: "Protect",
    ko: "지키기",
    question: "예상치 못한 일이 와도 삶이 흔들리지 않는가?",
    body: "비상금, 보험, 부채, 상속까지 — 애써 쌓은 것을 지키는 안전장치를 점검합니다. 불안을 키우는 대비가 아니라 마음이 놓이는 준비를 갖춥니다.",
    image: "/media/pillar-protect.png",
  },
];

export type Program = {
  slug: string;
  level: string;
  title: string;
  summary: string;
  hours: string;
  format: string;
  audience: string;
  outcomes: string[];
  fee: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: "foundation",
    level: "1단계",
    title: "머니프레임 파운데이션",
    summary:
      "머니프레임의 네 가지 축과 코칭 대화의 기본기를 익히는 입문 과정입니다. 나의 돈 습관을 먼저 진단하고 언어로 정리합니다.",
    hours: "16시간 (2일)",
    format: "오프라인 집합교육 · 서울",
    audience: "재무코칭에 처음 입문하는 분, 자기 재무를 정리하고 싶은 분",
    outcomes: [
      "머니프레임 4축 진단 도구를 스스로 사용",
      "판단하지 않고 듣는 코칭 대화 5단계 습득",
      "개인 머니프레임 리포트 1건 작성",
    ],
    fee: "590,000원",
  },
  {
    slug: "practitioner",
    level: "2단계",
    title: "머니프레임 코치 프랙티셔너",
    summary:
      "실제 고객을 대상으로 8회기 코칭을 설계하고 진행하는 전문가 과정입니다. 슈퍼비전과 동료 피드백이 포함됩니다.",
    hours: "48시간 (6주)",
    format: "온라인 라이브 + 오프라인 실습 3회",
    audience: "파운데이션 수료자, 재무·교육·상담 분야 실무자",
    outcomes: [
      "8회기 코칭 프로그램 설계 및 시연",
      "실습 고객 2인 대상 코칭 20시간 수행",
      "슈퍼비전 리포트 및 사례 발표",
    ],
    fee: "1,850,000원",
  },
  {
    slug: "certified",
    level: "인증",
    title: "인증 머니프레임 코치 (CMFC)",
    summary:
      "협회가 인증하는 머니프레임 코치 자격 심사 과정입니다. 코칭 시수, 사례 심사, 윤리 시험을 통과하면 자격이 부여됩니다.",
    hours: "심사 4~6주",
    format: "서류 심사 + 실기 평가 + 윤리 인터뷰",
    audience: "프랙티셔너 수료 후 코칭 50시간 이상 수행한 코치",
    outcomes: [
      "인증 머니프레임 코치(CMFC) 자격 취득",
      "협회 코치 찾기 디렉토리 등재",
      "연간 보수교육 및 사례 슈퍼비전 참여 자격",
    ],
    fee: "심사료 350,000원 / 연회비 120,000원",
  },
  {
    slug: "family-workshop",
    level: "특별",
    title: "가정을 위한 머니프레임 워크숍",
    summary:
      "부모와 자녀가 함께 참여하는 반나절 워크숍입니다. 보드게임과 대화 카드로 가정의 돈 원칙을 함께 만듭니다.",
    hours: "4시간 (반일)",
    format: "오프라인 · 가족 단위 신청",
    audience: "초등 고학년~고등학생 자녀를 둔 가정",
    outcomes: [
      "가정 공동의 돈 약속 3가지 작성",
      "용돈·저축·기부 배분 규칙 합의",
      "분기별 가족 머니 대화 루틴 설계",
    ],
    fee: "가정당 180,000원 (2인 기준)",
  },
];

export type Coach = {
  name: string;
  region: string;
  cert: string;
  since: number;
  focus: string[];
  bio: string;
  formats: string[];
};

export const COACHES: Coach[] = [
  {
    name: "김서연",
    region: "서울",
    cert: "인증 머니프레임 코치 (CMFC)",
    since: 2020,
    focus: ["신혼·맞벌이 가계", "지출 재설계", "공동 재무 대화"],
    bio: "은행 PB 12년 경력을 바탕으로, 부부가 서로의 돈 언어를 이해하도록 돕는 코칭에 집중합니다.",
    formats: ["대면", "온라인"],
  },
  {
    name: "박준호",
    region: "경기",
    cert: "인증 머니프레임 코치 (CMFC)",
    since: 2021,
    focus: ["프리랜서·1인 사업자", "소득 구조화", "세금·비상금"],
    bio: "불규칙한 소득을 다루는 프리랜서를 위해 '버는 방식'부터 다시 그리는 코칭을 진행합니다.",
    formats: ["온라인"],
  },
  {
    name: "이하늘",
    region: "부산",
    cert: "머니프레임 코치 프랙티셔너",
    since: 2022,
    focus: ["사회초년생", "첫 투자 원칙", "부채 정리"],
    bio: "20~30대가 유행에 흔들리지 않는 자기만의 투자 규칙을 세우도록 함께 만듭니다.",
    formats: ["대면", "온라인"],
  },
  {
    name: "정민경",
    region: "대구",
    cert: "인증 머니프레임 코치 (CMFC)",
    since: 2020,
    focus: ["은퇴 전환기", "인출 전략", "상속·증여 준비"],
    bio: "50대 이후의 자산 인출과 가족 간 돈 대화를 20년 재무설계 경험으로 안내합니다.",
    formats: ["대면"],
  },
  {
    name: "최우진",
    region: "서울",
    cert: "머니프레임 코치 프랙티셔너",
    since: 2023,
    focus: ["자녀 경제교육", "가정 워크숍", "용돈 시스템"],
    bio: "초·중등 교사 출신으로, 가정에서 이어지는 자녀 경제교육 루틴을 설계합니다.",
    formats: ["대면", "온라인"],
  },
  {
    name: "한지원",
    region: "광주",
    cert: "인증 머니프레임 코치 (CMFC)",
    since: 2021,
    focus: ["자영업 가계", "사업·가계 분리", "현금흐름"],
    bio: "소상공인의 사업 통장과 생활 통장을 분리하고 현금흐름을 안정시키는 코칭을 합니다.",
    formats: ["대면", "온라인"],
  },
];

export type Activity = {
  date: string;
  category: string;
  title: string;
  body: string;
  image?: string;
};

export const ACTIVITIES: Activity[] = [
  {
    date: "2026.06",
    category: "지역사회",
    title: "청년 자립준비청년 대상 머니프레임 무료 코칭 (3기)",
    body: "자립준비청년 40명에게 6주 그룹 코칭을 제공했습니다. 참여자의 82%가 비상금 계좌를 처음으로 개설했습니다.",
    image: "/media/coaching-session.png",
  },
  {
    date: "2026.04",
    category: "연구",
    title: "『한국 가계의 머니프레임 인식 조사』 발간",
    body: "성인 2,000명을 대상으로 네 축의 균형 상태를 조사한 연차 리포트를 공개했습니다.",
    image: "/media/planning-journal.png",
  },
  {
    date: "2026.03",
    category: "교육기부",
    title: "중학교 자유학기제 '돈의 틀' 수업 지원",
    body: "수도권 12개 중학교에서 협회 코치들이 재능기부로 경제 수업을 진행했습니다.",
    image: "/media/boardgame-family.png",
  },
  {
    date: "2025.11",
    category: "컨퍼런스",
    title: "머니프레임 코치 컨퍼런스 2025",
    body: "전국 코치 180명이 모여 사례를 나누고 코칭 윤리 가이드 개정안을 논의했습니다.",
    image: "/media/family-together.png",
  },
];

export type Resource = {
  date: string;
  type: "공지" | "칼럼" | "자료" | "언론";
  title: string;
  summary: string;
};

export const RESOURCES: Resource[] = [
  {
    date: "2026.09.01",
    type: "공지",
    title: "2026년 하반기 코치 프랙티셔너 과정 모집 안내",
    summary: "9월 22일 개강하는 6주 과정의 모집을 시작합니다. 선착순 24명.",
  },
  {
    date: "2026.08.20",
    type: "칼럼",
    title: "가계부를 써도 돈이 안 모이는 이유",
    summary: "기록은 '쓰기' 축의 절반일 뿐입니다. 나머지 절반은 우선순위 대화입니다.",
  },
  {
    date: "2026.08.05",
    type: "자료",
    title: "머니프레임 자가진단 워크시트 (PDF)",
    summary: "네 가지 축을 스스로 점검하는 A4 2장 분량의 무료 워크시트입니다.",
  },
  {
    date: "2026.07.18",
    type: "언론",
    title: "[한국경제] \"돈 교육, 지식보다 습관\" — 협회 이사장 인터뷰",
    summary: "재무 지식 전달을 넘어 행동 변화를 다루는 코칭의 필요성을 이야기했습니다.",
  },
  {
    date: "2026.07.02",
    type: "공지",
    title: "인증 코치 보수교육(연 1회) 일정 공지",
    summary: "10월 중 온라인 4시간 + 오프라인 사례 슈퍼비전 4시간으로 진행됩니다.",
  },
  {
    date: "2026.06.10",
    type: "칼럼",
    title: "아이에게 용돈을 언제, 얼마나 줘야 할까",
    summary: "금액보다 '규칙을 함께 정하는 과정'이 경제교육의 핵심입니다.",
  },
];

export const TIMELINE: { year: string; text: string }[] = [
  { year: "2019", text: "머니프레임 코칭 연구모임 발족, 1기 코치 12명 배출" },
  { year: "2021", text: "사단법인 설립 인가, 코치 인증제도(CMFC) 도입" },
  { year: "2023", text: "누적 수료 코치 500명, 지역 지부 4곳 개설" },
  { year: "2025", text: "가정·학교 대상 경제교육 프로그램 표준안 배포" },
  { year: "2026", text: "인증 코치 320명, 연간 코칭 이용자 9,000명 돌파" },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "재무 지식이 없어도 코치 과정을 들을 수 있나요?",
    a: "네. 파운데이션 과정은 재무 전공이나 자격을 요구하지 않습니다. 다만 코칭은 정답을 알려주는 일이 아니라 질문으로 함께 찾아가는 일이므로, 사람의 이야기를 듣는 데 관심이 있는 분께 적합합니다.",
  },
  {
    q: "코칭과 재무상담은 어떻게 다른가요?",
    a: "상담이 전문가의 진단과 처방에 가깝다면, 머니프레임 코칭은 본인이 자기 기준을 세우도록 돕는 과정입니다. 협회 코치는 특정 금융상품을 권유하거나 판매하지 않습니다.",
  },
  {
    q: "코칭 비용과 기간은 어떻게 되나요?",
    a: "코치마다 다르지만 보통 회당 60~90분, 6~8회기로 진행됩니다. 신청 시 코치가 무료 오리엔테이션(30분)을 통해 목표와 일정을 함께 정합니다.",
  },
  {
    q: "기업·기관 대상 강의도 신청할 수 있나요?",
    a: "가능합니다. 임직원 대상 특강, 신입사원 교육, 지역주민 프로그램 등으로 운영한 사례가 있습니다. 신청 페이지에서 '단체·기관'을 선택해 문의해 주세요.",
  },
];
