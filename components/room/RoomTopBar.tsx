import { Logo } from "@/components/navbar/Logo";
import { BackToCatalog } from "@/components/room/BackToCatalog";

export const RoomTopBar = () => {
  return (
    <header className="sticky top-0 z-20 flex min-h-16 items-center justify-between gap-3 border-b border-[var(--color-subtle)] bg-[var(--color-surface)] px-[var(--gutter)] md:min-h-[4.5rem]">
      <BackToCatalog />
      <Logo />
    </header>
  );
};
