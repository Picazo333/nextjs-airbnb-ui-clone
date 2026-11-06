"use client";

import { EmptyState } from "@/components/feedback/EmptyState";
import { LoadingState } from "@/components/feedback/LoadingState";
import { BookingCard } from "@/components/room/BookingCard";
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
        <main className="mx-auto w-full max-w-6xl px-4 py-6">
          <LoadingState label="Loading stay" />
        </main>
      </>
    );
  }

  if (!room) {
    return (
      <>
        <RoomTopBar />
        <main className="mx-auto w-full max-w-6xl px-4 py-6">
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
      <main className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-4">
        <PhotoGallery photos={room.photos} />
        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_320px]">
          <RoomSummary room={room} />
          <BookingCard pricePerNight={room.pricePerNight} maxGuests={room.maxGuests} />
        </div>
      </main>
    </>
  );
};
