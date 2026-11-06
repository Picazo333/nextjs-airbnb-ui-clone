"use client";

import { MapPlaceholder } from "@/components/catalog/MapPlaceholder";
import { ResultsHeader } from "@/components/catalog/ResultsHeader";
import { EmptyState } from "@/components/feedback/EmptyState";
import { LoadingState } from "@/components/feedback/LoadingState";
import { ListingGrid } from "@/components/listings/ListingGrid";
import { Navbar } from "@/components/navbar/Navbar";
import { useCatalogListings } from "@/hooks/useCatalogListings";

// Spec: context.md — Catalog. Captured from the 375px Lisbon results page.
export const CatalogPage = () => {
  const { query, cards, loading, sortOrder, onQueryChange, onSortChange } = useCatalogListings();

  return (
    <>
      <Navbar query={query} onQueryChange={onQueryChange} />
      <main className="mx-auto w-full max-w-6xl px-4 py-4">
        <ResultsHeader
          count={cards.length}
          loading={loading}
          sortOrder={sortOrder}
          onSortChange={onSortChange}
        />
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="md:w-3/5">
            {loading ? <LoadingState label="Loading stays" /> : null}
            {!loading && cards.length === 0 ? (
              <EmptyState
                title="No stays match your search"
                body="Try a different destination."
              />
            ) : null}
            {!loading && cards.length > 0 ? (
              <ListingGrid listings={cards} columns="one" />
            ) : null}
          </div>
          <div className="md:w-2/5">
            <MapPlaceholder />
          </div>
        </div>
      </main>
    </>
  );
};
