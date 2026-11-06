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
    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-surface)]"
    : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink)]";

  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onSelect(id)}
      className={`flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors duration-[120ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${stateClass}`}
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </button>
  );
};
