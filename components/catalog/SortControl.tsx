import type { SortOrder } from "@/lib/sortListings";

type SortControlProps = {
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
};

export const SortControl = ({ sortOrder, onSortChange }: SortControlProps) => {
  return (
    <label className="flex items-center gap-2 text-sm text-neutral-700">
      <span>Price</span>
      <select
        value={sortOrder}
        onChange={(event) => onSortChange(event.target.value as SortOrder)}
        className="h-11 rounded-lg border border-neutral-300 bg-white px-2 text-sm text-neutral-900"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </label>
  );
};
