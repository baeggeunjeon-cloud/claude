import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CoachDirectory } from "@/components/CoachDirectory";

export const metadata: Metadata = {
  title: "코치 찾기",
  description:
    "지역과 방식, 관심 주제로 인증 머니프레임 코치를 찾고 30분 무료 오리엔테이션을 신청하세요.",
};

export default function CoachesPage() {
  return (
    <>
      <PageHeader
        kicker="코치 찾기"
        title="상황에 맞는 코치를 찾으세요"
        lead="협회 인증을 거친 코치들입니다. 지역·방식·관심 주제로 좁혀 보고, 마음에 드는 코치에게 무료 오리엔테이션을 신청할 수 있습니다."
      />
      <CoachDirectory />
    </>
  );
}
