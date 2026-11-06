import Link from "next/link";
import { PhotoPlaceholder } from "@/components/media/PhotoPlaceholder";
import type { Listing } from "@/types/listing";

type ListingCardProps = {
  listing: Listing;
};

export const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Link href={`/rooms/${listing.id}`} className="group block rounded-xl">
      <PhotoPlaceholder tone={listing.tone} label={listing.photoLabel} />
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold text-[var(--color-ink)] group-hover:underline">
            {listing.title}
          </h2>
          <p className="mt-1 text-sm text-[var(--color-muted)]">{listing.location}</p>
        </div>
        <p className="shrink-0 text-sm text-[var(--color-ink)]">
          <span aria-hidden="true">★</span>
          <span className="sr-only">Rated</span> {listing.rating.toFixed(2)}
        </p>
      </div>
      <p className="mt-1 text-sm text-[var(--color-ink)]">
        <span className="font-semibold">${listing.pricePerNight}</span>
        <span className="text-[var(--color-muted)]"> per night</span>
      </p>
    </Link>
  );
};
