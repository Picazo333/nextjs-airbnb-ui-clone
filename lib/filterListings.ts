import type { CategoryId, Listing } from "@/types/listing";

export const filterListings = (
  source: Listing[],
  query: string,
  category: CategoryId,
): Listing[] => {
  const needle = query.trim().toLowerCase();

  return source.filter((listing) => {
    const matchesCategory = category === "all" || listing.category === category;
    const haystack = `${listing.title} ${listing.location}`.toLowerCase();
    const matchesQuery = needle.length === 0 || haystack.includes(needle);
    return matchesCategory && matchesQuery;
  });
};
