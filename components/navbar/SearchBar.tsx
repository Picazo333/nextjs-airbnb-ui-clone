type SearchBarProps = {
  query: string;
  onQueryChange: (value: string) => void;
};

export const SearchBar = ({ query, onQueryChange }: SearchBarProps) => {
  return (
    <label className="relative block min-w-0">
      <span className="sr-only">Search stays</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm text-neutral-500"
      >
        ⌕
      </span>
      <input
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Start your search"
        autoComplete="off"
        className="h-11 w-full rounded-full border border-neutral-200 bg-neutral-50 pr-4 pl-10 text-sm text-neutral-900 shadow-sm outline-none focus-visible:border-neutral-400"
      />
    </label>
  );
};
