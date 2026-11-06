"use client";

import { useState } from "react";

export const UserMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative shrink-0"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-label="Account menu"
        aria-expanded={open}
        aria-controls="account-menu"
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2 text-[var(--color-ink)]"
      >
        <svg aria-hidden="true" viewBox="0 0 18 18" className="h-5 w-5">
          <path fill="currentColor" d="M2 4h14v2H2zm0 4h14v2H2zm0 4h14v2H2z" />
        </svg>
        <span aria-hidden="true" className="h-8 w-8 rounded-full bg-[var(--color-ink)]" />
      </button>
      {open ? (
        <p
          id="account-menu"
          role="region"
          aria-label="Account"
          className="absolute right-0 z-30 mt-2 w-52 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-sm text-[var(--color-ink)] shadow-[var(--shadow-overlay)]"
        >
          Account preview. Sign-in is not part of this UI clone.
        </p>
      ) : null}
    </div>
  );
};
