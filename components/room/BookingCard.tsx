import { GuestCounter } from "@/components/room/GuestCounter";

type BookingCardProps = {
  pricePerNight: number;
  maxGuests: number;
};

export const BookingCard = ({ pricePerNight, maxGuests }: BookingCardProps) => {
  return (
    <aside className="h-fit rounded-xl border border-neutral-200 p-4 shadow-md md:sticky md:top-24">
      <p className="text-neutral-800">
        <span className="text-xl font-semibold text-neutral-900">${pricePerNight}</span> per night
      </p>
      <GuestCounter maxGuests={maxGuests} />
      <button
        type="button"
        className="mt-4 h-12 w-full rounded-lg bg-brand text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        Reserve
      </button>
      <p className="mt-3 text-center text-xs text-neutral-500">
        Preview only. No payment is processed.
      </p>
    </aside>
  );
};
