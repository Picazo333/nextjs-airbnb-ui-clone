import type { CategoryId } from "@/types/listing";

type CategoryChipProps = {
  id: CategoryId;
  label: string;
  icon: string;
  active: boolean;
  onSelect: (id: CategoryId) => void;
};

export const CategoryChip = ({ id, label, icon, active, onSelect }: CategoryChipProps) => {
  const stateClass = active
    ? "border-neutral-900 bg-neutral-900 text-white"
    : "border-neutral-200 bg-white text-neutral-700";

  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onSelect(id)}
      className={`flex h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${stateClass}`}
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </button>
  );
};
