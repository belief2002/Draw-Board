"use client";
import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";
import { useSearchParams } from "next/navigation";


interface DashboardPageProps{
  searchParams:{
    search?: string;
    favorites?: string
  }
}
export default function DashboardPage({searchParams}:DashboardPageProps) {
  const { organization } = useOrganization();
  const searchParamss = useSearchParams()
  const search = searchParamss.get("search")
  searchParams.search = search!== null? search : undefined;
  console.log(searchParams);
  
  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (<EmptyOrg />) : (
      <BoardList
      orgId={organization.id}
      query = { searchParams}
      />
      )}
    </div>
  );
}
