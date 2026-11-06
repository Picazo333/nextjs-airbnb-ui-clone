type LoadingStateProps = {
  label: string;
};

export const LoadingState = ({ label }: LoadingStateProps) => {
  return (
    <div role="status" aria-live="polite" className="grid gap-3">
      <p className="text-sm font-medium text-neutral-600">{label}</p>
      <div className="h-40 animate-pulse rounded-xl bg-neutral-200" />
      <div className="h-4 w-2/3 animate-pulse rounded bg-neutral-200" />
      <div className="h-4 w-1/3 animate-pulse rounded bg-neutral-200" />
    </div>
  );
};
