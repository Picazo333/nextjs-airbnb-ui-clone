import type { Listing } from "@/types/listing";

export type SortOrder = "asc" | "desc";

export const sortByPrice = (source: Listing[], order: SortOrder): Listing[] => {
  return [...source].sort((left, right) => {
    const diff = left.pricePerNight - right.pricePerNight;
    if (diff !== 0) {
      return order === "asc" ? diff : -diff;
    }
    return left.title.localeCompare(right.title);
  });
};
