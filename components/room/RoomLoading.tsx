export const RoomLoading = () => {
  return (
    <div role="status" aria-live="polite" aria-busy="true" className="min-h-[100dvh]">
      <div className="aspect-[4/3] rounded-xl bg-[var(--color-subtle)] md:aspect-[16/9]" />
      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="h-11 w-28 rounded-full bg-[var(--color-subtle)]" />
        <p className="text-sm font-medium text-[var(--color-muted)]">Loading stay</p>
        <div className="h-11 w-28 rounded-full bg-[var(--color-subtle)]" />
      </div>
    </div>
  );
};
