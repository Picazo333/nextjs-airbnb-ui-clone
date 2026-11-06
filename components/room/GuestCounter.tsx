"use client";

import { useState } from "react";

type GuestCounterProps = {
  maxGuests: number;
};

export const GuestCounter = ({ maxGuests }: GuestCounterProps) => {
  const [guests, setGuests] = useState(1);
  const minGuests = 1;

  return (
    <div className="mt-4 flex items-center justify-between gap-3">
      <p className="text-sm font-medium text-neutral-800">
        Guests
        <span className="mt-1 block text-xs font-normal text-neutral-500">1 to {maxGuests}</span>
      </p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Decrease guests"
          disabled={guests <= minGuests}
          onClick={() => setGuests((current) => Math.max(minGuests, current - 1))}
          className="h-11 w-11 rounded-full border border-neutral-300 text-lg disabled:opacity-40"
        >
          −
        </button>
        <span className="w-6 text-center text-sm" aria-live="polite">
          {guests}
        </span>
        <button
          type="button"
          aria-label="Increase guests"
          disabled={guests >= maxGuests}
          onClick={() => setGuests((current) => Math.min(maxGuests, current + 1))}
          className="h-11 w-11 rounded-full border border-neutral-300 text-lg disabled:opacity-40"
        >
          +
        </button>
      </div>
    </div>
  );
};
