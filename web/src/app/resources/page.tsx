import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ResourceList } from "@/components/ResourceList";

export const metadata: Metadata = {
  title: "자료실·소식",
  description:
    "협회 공지, 칼럼, 무료 자료와 언론 보도를 한곳에서 확인하세요.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        kicker="자료실·소식"
        title="협회 소식과 자료"
        lead="모집 공지와 코칭 칼럼, 자가진단 워크시트 같은 무료 자료, 그리고 언론 보도를 모았습니다."
      />
      <ResourceList />
    </>
  );
}
