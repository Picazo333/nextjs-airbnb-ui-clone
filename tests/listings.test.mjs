import assert from "node:assert/strict";
import test from "node:test";
import { listings } from "../data/rooms.ts";
import { filterListings } from "../lib/filterListings.ts";
import { sortByPrice } from "../lib/sortListings.ts";

test("filter keeps every stay when the query and category are open", () => {
  assert.equal(filterListings(listings, "  ", "all").length, listings.length);
});

test("filter matches title or location and ignores surrounding space", () => {
  const found = filterListings(listings, "  lisbon ", "all");
  assert.ok(found.some((listing) => listing.location === "Lisbon, Portugal"));
  assert.ok(found.every((listing) => `${listing.title} ${listing.location}`.toLowerCase().includes("lisbon")));
});

test("filter combines category and query", () => {
  const found = filterListings(listings, "cliff", "beach");
  assert.deepEqual(
    found.map((listing) => listing.id),
    ["cliff-cottage"],
  );
});

test("an unknown query produces an empty list", () => {
  assert.deepEqual(filterListings(listings, "not-a-real-place", "all"), []);
});

test("price sort is ascending or descending and does not mutate the source", () => {
  const before = listings.map((listing) => listing.id);
  const ascending = sortByPrice(listings, "asc").map((listing) => listing.pricePerNight);
  const descending = sortByPrice(listings, "desc").map((listing) => listing.pricePerNight);
  assert.deepEqual(ascending, [...ascending].sort((left, right) => left - right));
  assert.deepEqual(descending, [...descending].sort((left, right) => right - left));
  assert.deepEqual(
    listings.map((listing) => listing.id),
    before,
  );
});
