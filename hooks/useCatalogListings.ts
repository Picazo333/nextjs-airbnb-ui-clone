"use client";

import { useEffect, useRef, useState } from "react";
import { listings } from "@/data/rooms";
import { filterListings } from "@/lib/filterListings";
import { sortByPrice, type SortOrder } from "@/lib/sortListings";
import type { Listing } from "@/types/listing";

const visibleCards = (query: string, sortOrder: SortOrder): Listing[] => {
  return sortByPrice(filterListings(listings, query, "all"), sortOrder);
};

export const useCatalogListings = () => {
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [cards, setCards] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const queryRef = useRef(query);
  const sortRef = useRef(sortOrder);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCards(visibleCards(queryRef.current, sortRef.current));
      setLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const onQueryChange = (value: string) => {
    queryRef.current = value;
    setQuery(value);
    if (!loading) {
      setCards(visibleCards(value, sortRef.current));
    }
  };

  const onSortChange = (value: SortOrder) => {
    sortRef.current = value;
    setSortOrder(value);
    if (!loading) {
      setCards(visibleCards(queryRef.current, value));
    }
  };

  return { query, cards, loading, sortOrder, onQueryChange, onSortChange };
};
