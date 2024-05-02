"use client"
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useQuery } from "convex/react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const Info = ({
  boardId,
}: InfoProps) => {

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">
  })

  if(!data) {
    return <InfoSkeleton/>
  }

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 items-center shadow-md flex">
      <Button asChild variant="board" className="px-2">
        <Link href="/">
        <Image
        src="/logo.svg"
        alt="logo"
        height={40}
        width={40}
        />
        <span className={cn(
          "font-semibold text-xl ml-2 text-black",
          font.className
        )}>Board</span>
        </Link>
      </Button>
    </div>
  );
};

export const InfoSkeleton = ()=> {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 items-center shadow-md flex w-[300px]" />
  );
};
