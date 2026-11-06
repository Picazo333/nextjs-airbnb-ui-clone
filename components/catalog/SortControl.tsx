import type { SortOrder } from "@/lib/sortListings";

type SortControlProps = {
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
};

export const SortControl = ({ sortOrder, onSortChange }: SortControlProps) => {
  return (
    <label className="flex flex-wrap items-center gap-2 text-sm font-medium text-[var(--color-ink)]">
      <span>Price</span>
      <select
        value={sortOrder}
        onChange={(event) => onSortChange(event.target.value as SortOrder)}
        className="min-h-12 rounded-[var(--radius-control)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-base text-[var(--color-ink)]"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </label>
  );
};
