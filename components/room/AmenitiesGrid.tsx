import { AmenityItem } from "@/components/room/AmenityItem";
import type { Amenity } from "@/types/room";

type AmenitiesGridProps = {
  amenities: Amenity[];
};

export const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section aria-label="Amenities">
      <h2 className="mb-3 text-xl font-bold text-[var(--color-ink)]">Amenities</h2>
      <ul className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:grid-cols-3">
        {amenities.map((amenity) => (
          <li key={amenity.label}>
            <AmenityItem icon={amenity.icon} label={amenity.label} />
          </li>
        ))}
      </ul>
    </section>
  );
};
