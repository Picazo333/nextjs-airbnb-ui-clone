import { CategoryChip } from "@/components/categories/CategoryChip";
import { categories, type CategoryId } from "@/types/listing";

type CategoryFilterProps = {
  active: CategoryId;
  onChange: (id: CategoryId) => void;
};

export const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => {
  return (
    <div className="-mx-[var(--gutter)] mb-4 overflow-x-auto px-[var(--gutter)] py-2">
      <ul aria-label="Categories" className="flex w-max gap-2">
        {categories.map((category) => (
          <li key={category.id}>
            <CategoryChip
              id={category.id}
              label={category.label}
              icon={category.icon}
              active={category.id === active}
              onSelect={onChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
