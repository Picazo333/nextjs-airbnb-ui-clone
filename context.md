# Context

Mini-brief for a mobile-first vacation-rental UI clone. Three views only: Home, Catalog, and Room detail. Visual language comes from Airbnb captures taken in this session; the component list also follows the product brief where the live page was covered by a modal or continued below the fold.

## User

The person using this interface is a traveler planning a short stay. They open the app to scan places, narrow the list by a word or a category, compare prices, and open one listing to check the photos, the host, the amenities, and how many guests they would bring. They are not paying inside this preview.

## Pages

### Home (`/`)

The first screen is a browsable set of stays. It shows a top bar (logo, search field, link to the catalog, account control), a horizontal row of stay categories, and a grid of listing cards. On a 375px-wide screen the cards stack in one column. From 768px upward the grid gains more columns. While the mock data is loading, the grid is empty and a loading status is visible. Typing in the search field updates the card list on each keystroke. Choosing a category highlights that chip and narrows the same list.

### Catalog (`/catalog`)

This screen is the results view. It shows how many stays are listed and a price sort (Ascending or Descending). It reuses the same listing card as Home. A gray map region sits under the cards on small screens and to the right of the cards from 768px up. The map is a styled placeholder labeled "Map". Search on this page also filters the card list in place.

### Room detail (`/rooms/[id]`)

This screen is one stay. It loads that stay from the id in the URL and shows a loading status until the simulated response arrives. Then it shows a photo gallery with Previous and Next, the title, star rating, review count, and location, a host row, an amenities grid, and a booking card with the nightly price, a guest counter, and a Reserve button. A back control returns to the catalog. An unknown id shows a not-found message with the same way back.

## Components by view

Home: `Navbar`, `Logo`, `SearchBar`, `CatalogLink`, `UserMenu`, `CategoryFilter`, `CategoryChip`, `ListingGrid`, `ListingCard`, `PhotoPlaceholder`, `LoadingState`, `EmptyState`.

Catalog: `Navbar` (and the pieces above), `ResultsHeader`, `SortControl`, `ListingGrid`, `ListingCard`, `MapPlaceholder`, `LoadingState`, `EmptyState`.

Room: `RoomTopBar`, `BackToCatalog`, `Logo`, `PhotoGallery`, `PhotoPlaceholder`, `ListingHeader`, `HostInfo`, `AmenitiesGrid`, `AmenityItem`, `BookingCard`, `GuestCounter`, `LoadingState`, `EmptyState`.

Shared data shapes live in `/types`: `Listing` and `Room`.

## Scaffold

Prompt used, taken from the assignment and run in this session:

> Set up a new Next.js 16 project with TypeScript, Tailwind CSS, and the App Router. Use `npx create-next-app` with the appropriate flags. Organize the folder structure with a `/components` folder for reusable UI pieces.

Command reviewed before it was run:

```bash
npx --yes create-next-app@16.4.5 /tmp/nextjs-airbnb-scaffold \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --import-alias "@/*" \
  --use-npm \
  --disable-git \
  --no-agent-feedback \
  --yes
```

Flags that were rejected on purpose: `--example` (that would be a starter template) and `--src-dir` (routes and components need to stay at `/app` and `/components`, not under `src/`). No shadcn or other UI kit was added.

`create-next-app` checks that the parent of the target directory is writable. Targeting `.` (`/workspace`) failed because the parent is `/` and this user cannot write there (`The application path is not writable`). The same flags were then used with a target under `/tmp`, whose parent is writable. `--disable-git` kept the scaffold from creating a nested repository. The generated files were moved into this repo.

Installed result: `next@16.4.5`, `react@19.3.0`, `react-dom@19.3.0`, Tailwind CSS 4, TypeScript, ESLint, App Router. The generated `next.config.ts` enables `cacheComponents` and `partialPrefetching`. Those defaults were left in place.

Before any view component was written, `npm run dev -- --port 3000` was started. The log showed `Next.js 16.4.5 (Turbopack)`, `Ready`, `Cache Components enabled`, and `GET / 200`.

## Vision to spec

Captures were taken on 2026-11-06 with headless Chrome at a 375px-wide viewport.

Prompt applied to each capture:

> Identify component names, their props, and their layout relationship within this 375px Airbnb page. Note anything the product brief requires that is covered by a modal or sits below the fold.

### Home capture

URL: `https://www.airbnb.com/`. Visible from top to bottom: an app-install banner, the Airbnb mark, a full-width pill reading "Start your search", a horizontal scroller of pills (All, Homes, Experiences), then horizontal photo cards under section titles. A bottom sheet ("Now you'll see one price…") covered the lower part of the viewport.

What the live homepage did not show in this capture: a Beach / Mansions / Trending row, or a vertical one-column grid of stay cards. Those pieces are required by the product brief, so the Home spec below keeps the captured visual language (white bar, pill search, horizontal scroller, photo card) and adds the brief's stay categories and card grid.

Home layout, top to bottom, mobile first:

1. `Navbar` — row of `Logo` (`href: "/"`), then `CatalogLink` and `UserMenu`; `SearchBar` is full width under that row. From 768px the search sits between the logo and the actions.
2. `CategoryFilter` — horizontal scroller of `CategoryChip`.
3. `ListingGrid` — one column by default, two columns from 768px, three from the extra-wide breakpoint.

`SearchBar` props: `query: string`, `onQueryChange: (value: string) => void`. The typed value is state. Each change replaces the card-list state.

`CategoryChip` props: `id`, `label`, `icon`, `active`, `onSelect`. The active id is state. The active chip uses a filled dark style.

`ListingCard` props: `listing: Listing`. The card links to `/rooms/[id]` and shows `PhotoPlaceholder` (`tone`, `label`), title, price per night, and a star rating.

`LoadingState` props: `label: string`. It replaces the grid while `loading` is true.

### Catalog capture

URL: `https://www.airbnb.com/s/Lisbon--Portugal/homes`. Visible: a back control, a search summary pill ("Homes in Lisbon", "Any week · Add guests"), a filter icon, a horizontal chip row (Washer, Wifi, Kitchen, Free parking), a large gray area, and the line "Over 1,000 homes in Lisbon". The same pricing sheet covered the bottom, so individual cards were not readable in the capture.

Catalog layout, mobile first:

1. `Navbar` — same props as Home. Search filters this page's card list.
2. `ResultsHeader` — props `count`, `loading`, `sortOrder`, `onSortChange`. The count is the heading. `SortControl` is the Ascending / Descending price select. `sortOrder` is state and reorders the card-list state.
3. A column stack: `ListingGrid` (`columns: "one"`, reusing `ListingCard`), then `MapPlaceholder` (no props; gray box, text "Map"). From 768px the grid column and the map sit side by side, map on the right.

### Room capture

URL: `https://www.airbnb.com/rooms/8357`. Visible: a top row with back, share, and save; a full-bleed photo with a "1/44" index; the title "Mushroom dome retreat & Land of paradise suite"; the lines "Room in Aptos, California" and "2 beds · Dedicated bathroom"; a bottom bar with a 4.89 star rating and a coral action pill. A taller second capture did not finish (7KB file, Chrome killed by timeout), so host, amenities, and a full booking form were not in the image. The brief requires those sections, so they are specified directly under the gallery.

Room layout, top to bottom, mobile first:

1. `RoomTopBar` — `BackToCatalog` (`href: "/catalog"`) and `Logo`.
2. `PhotoGallery` — props `photos: RoomPhoto[]`. State is the visible index. Buttons are labeled Previous and Next. The visible frame is a `PhotoPlaceholder`.
3. `ListingHeader` — props `title`, `rating`, `reviewCount`, `location`.
4. `HostInfo` — props `name`, `yearsHosting`. Includes an avatar placeholder.
5. `AmenitiesGrid` — props `amenities: Amenity[]`. Each `AmenityItem` is an icon plus a label.
6. `BookingCard` — props `pricePerNight`, `maxGuests`. Contains `GuestCounter` (state is the guest count, clamped to 1…`maxGuests`) and a Reserve button.

From 768px, `ListingHeader`, `HostInfo`, and `AmenitiesGrid` stay in the left column and `BookingCard` sticks in a right column. The gallery stays full width above them.

The id used to load the room is the dynamic route param. `useEffect` waits one second, then stores the matching `Room` or nothing.
