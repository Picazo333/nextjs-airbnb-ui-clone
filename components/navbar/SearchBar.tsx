type SearchBarProps = {
  query: string;
  onQueryChange: (value: string) => void;
};

export const SearchBar = ({ query, onQueryChange }: SearchBarProps) => {
  return (
    <label className="block min-w-0">
      <span className="mb-1 block text-xs font-medium text-[var(--color-muted)]">Search stays</span>
      <input
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Start your search"
        autoComplete="off"
        className="min-h-12 w-full rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-base text-[var(--color-ink)]"
      />
    </label>
  );
};
