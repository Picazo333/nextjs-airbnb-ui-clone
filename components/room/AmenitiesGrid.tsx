import { AmenityItem } from "@/components/room/AmenityItem";
import type { Amenity } from "@/types/room";

type AmenitiesGridProps = {
  amenities: Amenity[];
};

export const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section aria-label="Amenities">
      <h2 className="mb-3 text-lg font-semibold text-neutral-900">Amenities</h2>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {amenities.map((amenity) => (
          <li key={amenity.label}>
            <AmenityItem icon={amenity.icon} label={amenity.label} />
          </li>
        ))}
      </ul>
    </section>
  );
};
