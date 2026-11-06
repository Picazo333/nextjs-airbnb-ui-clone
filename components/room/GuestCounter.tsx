"use client";

import { useState } from "react";

type GuestCounterProps = {
  maxGuests: number;
};

const stepClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-lg text-[var(--color-ink)] disabled:opacity-40";

export const GuestCounter = ({ maxGuests }: GuestCounterProps) => {
  const [guests, setGuests] = useState(1);
  const minGuests = 1;

  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm font-semibold text-[var(--color-ink)]">
        Guests
        <span className="mt-1 block text-xs font-normal text-[var(--color-muted)]">1 to {maxGuests}</span>
      </p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Decrease guests"
          disabled={guests <= minGuests}
          onClick={() => setGuests((current) => Math.max(minGuests, current - 1))}
          className={stepClass}
        >
          −
        </button>
        <span className="min-w-6 text-center text-sm text-[var(--color-ink)]" aria-live="polite">
          {guests}
        </span>
        <button
          type="button"
          aria-label="Increase guests"
          disabled={guests >= maxGuests}
          onClick={() => setGuests((current) => Math.min(maxGuests, current + 1))}
          className={stepClass}
        >
          +
        </button>
      </div>
    </div>
  );
};
