import { Suspense } from "react";
import { LoadingState } from "@/components/feedback/LoadingState";
import { RoomLoader } from "@/components/room/RoomLoader";

type RoomPageProps = {
  params: Promise<{ id: string }>;
};

const RoomPage = ({ params }: RoomPageProps) => {
  return (
    <Suspense fallback={<LoadingState label="Loading stay" />}>
      <RoomLoader params={params} />
    </Suspense>
  );
};

export default RoomPage;
