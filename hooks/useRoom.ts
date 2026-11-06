"use client";

import { useEffect, useState } from "react";
import { getRoom } from "@/data/rooms";
import type { Room } from "@/types/room";

export const useRoom = (id: string) => {
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setRoom(getRoom(id) ?? null);
      setLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [id]);

  return { room, loading };
};
