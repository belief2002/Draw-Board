import { Skeleton } from "@/components/ui/skeleton";

export const Participants = () => {
  return (
    <div className="absolute top-2 right-2 bg-white rounded-md p-3 h-12 items-center shadow-md flex">
      List of users
    </div>
  );
};

export const ParticipantsSkeleton=()=> {
  return (
    <div className="absolute top-2 right-2 bg-white rounded-md p-3 h-12 items-center shadow-md flex w-[100px]"/>
    
  );
};
