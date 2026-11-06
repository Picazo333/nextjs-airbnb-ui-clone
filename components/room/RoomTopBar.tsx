import { Logo } from "@/components/navbar/Logo";
import { BackToCatalog } from "@/components/room/BackToCatalog";

export const RoomTopBar = () => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-neutral-200 bg-white px-4 py-3">
      <BackToCatalog />
      <Logo />
    </header>
  );
};
