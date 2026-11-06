import { GuestCounter } from "@/components/room/GuestCounter";

type BookingCardProps = {
  pricePerNight: number;
  maxGuests: number;
};

export const BookingCard = ({ pricePerNight, maxGuests }: BookingCardProps) => {
  return (
    <aside className="h-fit rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 md:sticky md:top-24">
      <p className="text-[var(--color-ink)]">
        <span className="text-xl font-bold">${pricePerNight}</span> per night
      </p>
      <GuestCounter maxGuests={maxGuests} />
      <button
        type="button"
        className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-[var(--radius-control)] bg-[var(--color-action)] text-base font-semibold text-[var(--color-on-action)] transition-colors duration-[120ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:bg-[var(--color-action-hover)] active:bg-[var(--color-action-pressed)]"
      >
        Reserve
      </button>
      <p className="mt-3 text-center text-xs leading-4 text-[var(--color-muted)]">
        Preview only. No payment is processed.
      </p>
    </aside>
  );
};
