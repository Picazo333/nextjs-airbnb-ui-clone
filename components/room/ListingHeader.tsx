type ListingHeaderProps = {
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
};

export const ListingHeader = ({ title, rating, reviewCount, location }: ListingHeaderProps) => {
  return (
    <header>
      <h1 className="text-2xl font-semibold text-neutral-900">{title}</h1>
      <p className="mt-2 text-sm text-neutral-800">
        <span aria-hidden="true">★</span>
        <span className="sr-only">Rated</span> {rating.toFixed(2)}
        <span className="text-neutral-500"> · {reviewCount} reviews</span>
      </p>
      <p className="mt-1 text-sm text-neutral-600">{location}</p>
    </header>
  );
};
