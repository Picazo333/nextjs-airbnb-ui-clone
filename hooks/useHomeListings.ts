"use client";

import { useEffect, useRef, useState } from "react";
import { listings } from "@/data/rooms";
import { filterListings } from "@/lib/filterListings";
import type { CategoryId, Listing } from "@/types/listing";

export const useHomeListings = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryId>("all");
  const [cards, setCards] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const queryRef = useRef(query);
  const categoryRef = useRef(category);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCards(filterListings(listings, queryRef.current, categoryRef.current));
      setLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const onQueryChange = (value: string) => {
    queryRef.current = value;
    setQuery(value);
    if (!loading) {
      setCards(filterListings(listings, value, categoryRef.current));
    }
  };

  const onCategoryChange = (value: CategoryId) => {
    categoryRef.current = value;
    setCategory(value);
    if (!loading) {
      setCards(filterListings(listings, queryRef.current, value));
    }
  };

  return { query, category, cards, loading, onQueryChange, onCategoryChange };
};
