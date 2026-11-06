"use client";

import { useState } from "react";
import { PhotoPlaceholder } from "@/components/media/PhotoPlaceholder";
import type { RoomPhoto } from "@/types/room";

type PhotoGalleryProps = {
  photos: RoomPhoto[];
};

export const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [index, setIndex] = useState(0);
  const photo = photos[index] ?? photos[0];

  return (
    <section aria-label="Photo gallery">
      <PhotoPlaceholder
        tone={photo.tone}
        label={photo.label}
        className="aspect-[4/3] md:aspect-[16/9]"
      />
      <div className="mt-3 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setIndex((current) => Math.max(0, current - 1))}
          disabled={index <= 0}
          className="h-11 rounded-full border border-neutral-300 px-4 text-sm font-medium disabled:opacity-40"
        >
          Previous
        </button>
        <p className="text-sm text-neutral-600">
          {index + 1} / {photos.length}
        </p>
        <button
          type="button"
          onClick={() => setIndex((current) => Math.min(photos.length - 1, current + 1))}
          disabled={index >= photos.length - 1}
          className="h-11 rounded-full border border-neutral-300 px-4 text-sm font-medium disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </section>
  );
};
