"use client";

import { useState } from "react";

export const UserMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative shrink-0">
      <button
        type="button"
        aria-label="Account menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 items-center gap-2 rounded-full border border-neutral-200 px-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <span aria-hidden="true" className="px-1 text-sm">
          ☰
        </span>
        <span
          aria-hidden="true"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-xs font-medium text-white"
        >
          A
        </span>
      </button>
      {open ? (
        <p className="absolute right-0 z-30 mt-2 w-52 rounded-xl border border-neutral-200 bg-white p-3 text-sm text-neutral-700 shadow-lg">
          Account preview. Sign-in is not part of this UI clone.
        </p>
      ) : null}
    </div>
  );
};
