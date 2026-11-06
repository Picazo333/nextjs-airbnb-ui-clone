"use client";

import { useEffect } from "react";

export const MotionPreference = () => {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => {
      document.documentElement.dataset.motion = media.matches ? "reduced" : "full";
    };

    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return null;
};
