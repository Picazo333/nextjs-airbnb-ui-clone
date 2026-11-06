type ListingHeaderProps = {
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
};

export const ListingHeader = ({ title, rating, reviewCount, location }: ListingHeaderProps) => {
  return (
    <header>
      <h1 className="text-2xl font-bold text-[var(--color-ink)] md:text-3xl">{title}</h1>
      <p className="mt-2 text-sm text-[var(--color-ink)]">
        <span aria-hidden="true">★</span>
        <span className="sr-only">Rated</span> {rating.toFixed(2)}
        <span className="text-[var(--color-muted)]"> · {reviewCount} reviews</span>
      </p>
      <p className="mt-1 text-sm text-[var(--color-muted)]">{location}</p>
    </header>
  );
};
