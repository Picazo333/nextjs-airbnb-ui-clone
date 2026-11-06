import { Suspense } from "react";
import { RoomLoader } from "@/components/room/RoomLoader";
import { RoomLoading } from "@/components/room/RoomLoading";

type RoomPageProps = {
  params: Promise<{ id: string }>;
};

const RoomPage = ({ params }: RoomPageProps) => {
  return (
    <Suspense
      fallback={
        <main id="content" className="mx-auto w-full max-w-[var(--container)] flex-1 px-[var(--gutter)] py-6">
          <RoomLoading />
        </main>
      }
    >
      <RoomLoader params={params} />
    </Suspense>
  );
};

export default RoomPage;
