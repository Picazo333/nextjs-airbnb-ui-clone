import { CategoryChip } from "@/components/categories/CategoryChip";
import { categories, type CategoryId } from "@/types/listing";

type CategoryFilterProps = {
  active: CategoryId;
  onChange: (id: CategoryId) => void;
};

export const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => {
  return (
    <div className="-mx-4 mb-4 overflow-x-auto px-4">
      <ul aria-label="Categories" className="flex w-max gap-2 pb-1">
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
