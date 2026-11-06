"use client";

import { useState } from "react";
import { PhotoPlaceholder } from "@/components/media/PhotoPlaceholder";
import type { RoomPhoto } from "@/types/room";

type PhotoGalleryProps = {
  photos: RoomPhoto[];
};

const controlClass =
  "inline-flex min-h-11 items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-sm font-semibold text-[var(--color-ink)] disabled:opacity-40";

export const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [index, setIndex] = useState(0);
  const photo = photos[index] ?? photos[0];

  return (
    <section aria-label="Photo gallery">
      <PhotoPlaceholder tone={photo.tone} label={photo.label} className="aspect-[4/3] md:aspect-[16/9]" />
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setIndex((current) => Math.max(0, current - 1))}
          disabled={index <= 0}
          className={controlClass}
        >
          Previous
        </button>
        <p className="text-sm text-[var(--color-muted)]">
          <span className="sr-only">Photo</span> {index + 1} / {photos.length}
        </p>
        <button
          type="button"
          onClick={() => setIndex((current) => Math.min(photos.length - 1, current + 1))}
          disabled={index >= photos.length - 1}
          className={controlClass}
        >
          Next
        </button>
      </div>
    </section>
  );
};
