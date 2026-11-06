import { ListingCard } from "@/components/listings/ListingCard";
import type { Listing } from "@/types/listing";

type ListingGridProps = {
  listings: Listing[];
  columns?: "multi" | "one";
};

const columnClass = {
  multi: "md:grid-cols-2 xl:grid-cols-3",
  one: "md:grid-cols-1",
};

export const ListingGrid = ({ listings, columns = "multi" }: ListingGridProps) => {
  return (
    <ul aria-label="Listings" className={`grid grid-cols-1 gap-6 ${columnClass[columns]}`}>
      {listings.map((listing) => (
        <li key={listing.id}>
          <ListingCard listing={listing} />
        </li>
      ))}
    </ul>
  );
};
