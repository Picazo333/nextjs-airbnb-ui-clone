import { RoomDetail } from "@/components/room/RoomDetail";

type RoomLoaderProps = {
  params: Promise<{ id: string }>;
};

export const RoomLoader = async ({ params }: RoomLoaderProps) => {
  const { id } = await params;
  return <RoomDetail key={id} id={id} />;
};
