"use client";

import { CategoryFilter } from "@/components/categories/CategoryFilter";
import { EmptyState } from "@/components/feedback/EmptyState";
import { LoadingState } from "@/components/feedback/LoadingState";
import { ListingGrid } from "@/components/listings/ListingGrid";
import { Navbar } from "@/components/navbar/Navbar";
import { useHomeListings } from "@/hooks/useHomeListings";

// Spec: context.md — Home. Captured from the 375px Airbnb homepage.
export const HomePage = () => {
  const { query, category, cards, loading, onQueryChange, onCategoryChange } = useHomeListings();

  return (
    <>
      <Navbar query={query} onQueryChange={onQueryChange} />
      <main className="mx-auto w-full max-w-6xl px-4 py-4">
        <h1 className="mb-3 text-xl font-semibold text-neutral-900">Explore stays</h1>
        <CategoryFilter active={category} onChange={onCategoryChange} />
        {loading ? <LoadingState label="Loading stays" /> : null}
        {!loading && cards.length === 0 ? (
          <EmptyState
            title="No stays match your search"
            body="Try another word or choose a different category."
          />
        ) : null}
        {!loading && cards.length > 0 ? <ListingGrid listings={cards} /> : null}
      </main>
    </>
  );
};
