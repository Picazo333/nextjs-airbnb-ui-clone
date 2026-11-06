# nextjs-airbnb-ui-clone

Mobile-first clone of three Airbnb screens: Home, Catalog, and Room detail. Built with Next.js 16, React, TypeScript, and Tailwind CSS. There is no UI component library.

## Run

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## Routes

| Path | View |
|---|---|
| `/` | Search, category chips, and a listing grid |
| `/catalog` | Result count, price sort, the same cards, and a map placeholder |
| `/rooms/[id]` | Gallery, host, amenities, and a booking card |

Listing cards and the logo use `next/link`. The room page links back to `/catalog`.

## Structure

- `/app` — App Router routes
- `/components` — one component per file
- `/types` — `Listing` and `Room`
- `/data` — local stay records
- `/hooks` — loading, search, category, and sort state
- `context.md` — brief, scaffold command, and the vision-to-spec notes

## Decisions

- Styling is Tailwind utilities only. There are no `style={{}}` props.
- Photos are colored placeholders, so the app does not depend on remote images.
- Home and Catalog keep the visible card list in state and replace it on each keystroke or sort change.
- Each page simulates a fetch with `useEffect` and a one-second timeout, and shows a loading status until that finishes.
- The map is a gray box labeled "Map". A live map and a date picker are outside this version.
- `create-next-app` left Cache Components and Partial Prefetching on. The room route reads `params` inside `<Suspense>` so the static shell can still prerender.
- `allowedDevOrigins` includes `127.0.0.1`, because Next.js 16 blocks dev resources when the page is opened on that host instead of `localhost`.
- The scaffold command and the screenshot notes are recorded in `context.md`.
