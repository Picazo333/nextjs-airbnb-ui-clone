import type { Amenity } from "@/types/room";

export const AmenityItem = ({ icon, label }: Amenity) => {
  return (
    <div className="flex items-center gap-2 text-sm text-neutral-800">
      <span aria-hidden="true" className="text-base">
        {icon}
      </span>
      <span>{label}</span>
    </div>
  );
};
