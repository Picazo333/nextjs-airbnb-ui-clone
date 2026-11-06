"use client";

import { CategoryFilter } from "@/components/categories/CategoryFilter";
import { EmptyState } from "@/components/feedback/EmptyState";
import { LoadingState } from "@/components/feedback/LoadingState";
import { ListingGrid } from "@/components/listings/ListingGrid";
import { Navbar } from "@/components/navbar/Navbar";
import { useHomeListings } from "@/hooks/useHomeListings";

// Spec: context.md — Home. Captured from the 375px Airbnb homepage.
export const HomePage = () => {
  const { query, category, cards, loading, placeholderCount, onQueryChange, onCategoryChange } =
    useHomeListings();
  const narrowed = query.trim().length > 0 || category !== "all";

  const clearFilters = () => {
    onQueryChange("");
    onCategoryChange("all");
  };

  return (
    <>
      <Navbar query={query} onQueryChange={onQueryChange} />
      <main id="content" className="mx-auto w-full max-w-[var(--container)] flex-1 px-[var(--gutter)] py-6">
        <h1 className="text-2xl font-bold text-[var(--color-ink)]">Explore stays</h1>
        <p className="mt-2 mb-4 max-w-[var(--measure)] text-base text-[var(--color-muted)]" aria-live="polite">
          {loading
            ? "Loading stays from this preview."
            : narrowed
              ? cards.length === 1
                ? "1 stay matches the current search."
                : `${cards.length} stays match the current search.`
              : `${cards.length} stays in this preview.`}
        </p>
        <CategoryFilter active={category} onChange={onCategoryChange} />
        {loading ? <LoadingState label="Loading stays" rows={placeholderCount} columns="multi" /> : null}
        {!loading && cards.length === 0 ? (
          <EmptyState
            title="No stays match your search"
            body="Try another word or choose a different category."
            action="Clear search"
            onAction={clearFilters}
          />
        ) : null}
        {!loading && cards.length > 0 ? <ListingGrid listings={cards} /> : null}
      </main>
    </>
  );
};
