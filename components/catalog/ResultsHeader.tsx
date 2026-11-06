import { SortControl } from "@/components/catalog/SortControl";
import type { SortOrder } from "@/lib/sortListings";

type ResultsHeaderProps = {
  count: number;
  loading: boolean;
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
};

export const ResultsHeader = ({
  count,
  loading,
  sortOrder,
  onSortChange,
}: ResultsHeaderProps) => {
  const label = count === 1 ? "1 result" : `${count} results`;

  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h1 className="text-lg font-semibold text-neutral-900" aria-live="polite">
        {loading ? "Loading results" : label}
      </h1>
      <SortControl sortOrder={sortOrder} onSortChange={onSortChange} />
    </div>
  );
};
