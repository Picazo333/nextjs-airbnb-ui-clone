import { AmenitiesGrid } from "@/components/room/AmenitiesGrid";
import { HostInfo } from "@/components/room/HostInfo";
import { ListingHeader } from "@/components/room/ListingHeader";
import type { Room } from "@/types/room";

export const RoomSummary = ({ room }: { room: Room }) => {
  return (
    <div className="grid gap-6">
      <ListingHeader
        title={room.title}
        rating={room.rating}
        reviewCount={room.reviewCount}
        location={room.location}
      />
      <HostInfo name={room.hostName} yearsHosting={room.yearsHosting} />
      <AmenitiesGrid amenities={room.amenities} />
    </div>
  );
};
