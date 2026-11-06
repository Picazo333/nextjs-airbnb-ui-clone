type LoadingStateProps = {
  label: string;
  rows?: number;
  columns?: "multi" | "one";
};

const columnClass = {
  multi: "md:grid-cols-2 xl:grid-cols-3",
  one: "md:grid-cols-1",
};

export const LoadingState = ({ label, rows = 1, columns = "one" }: LoadingStateProps) => {
  return (
    <div role="status" aria-live="polite" aria-busy="true" className="grid gap-3">
      <p className="text-sm font-medium text-[var(--color-muted)]">{label}</p>
      <ul className={`grid grid-cols-1 gap-6 ${columnClass[columns]}`} aria-hidden="true">
        {Array.from({ length: rows }, (_, index) => (
          <li key={index} className="grid gap-3">
            <div className="aspect-[4/3] rounded-xl bg-[var(--color-subtle)]" />
            <div className="h-4 w-2/3 rounded bg-[var(--color-subtle)]" />
            <div className="h-4 w-1/3 rounded bg-[var(--color-subtle)]" />
          </li>
        ))}
      </ul>
    </div>
  );
};
