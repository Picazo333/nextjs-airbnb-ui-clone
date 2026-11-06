"use client";

import { EmptyState } from "@/components/feedback/EmptyState";
import { BookingCard } from "@/components/room/BookingCard";
import { RoomLoading } from "@/components/room/RoomLoading";
import { PhotoGallery } from "@/components/room/PhotoGallery";
import { RoomSummary } from "@/components/room/RoomSummary";
import { RoomTopBar } from "@/components/room/RoomTopBar";
import { useRoom } from "@/hooks/useRoom";

// Spec: context.md — Room detail. Captured from the 375px room page.
export const RoomDetail = ({ id }: { id: string }) => {
  const { room, loading } = useRoom(id);

  if (loading) {
    return (
      <>
        <RoomTopBar />
        <main id="content" className="mx-auto w-full max-w-[var(--container)] flex-1 px-[var(--gutter)] py-6">
          <RoomLoading />
        </main>
      </>
    );
  }

  if (!room) {
    return (
      <>
        <RoomTopBar />
        <main id="content" className="mx-auto w-full max-w-[var(--container)] flex-1 px-[var(--gutter)] py-6">
          <EmptyState
            title="Stay not found"
            body="That listing is not in this preview."
            href="/catalog"
            action="Back to catalog"
          />
        </main>
      </>
    );
  }

  return (
    <>
      <RoomTopBar />
      <main
        id="content"
        className="mx-auto grid w-full max-w-[var(--container)] flex-1 gap-6 px-[var(--gutter)] py-6"
      >
        <PhotoGallery photos={room.photos} />
        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_320px]">
          <RoomSummary room={room} />
          <BookingCard pricePerNight={room.pricePerNight} maxGuests={room.maxGuests} />
        </div>
      </main>
    </>
  );
};
