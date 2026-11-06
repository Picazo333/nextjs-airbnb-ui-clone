type ErrorStateProps = {
  title: string;
  body: string;
  onRetry: () => void;
};

export const ErrorState = ({ title, body, onRetry }: ErrorStateProps) => {
  return (
    <div
      role="alert"
      className="rounded-[var(--radius-card)] border border-[var(--color-danger)] bg-[var(--color-surface)] px-4 py-8"
    >
      <h1 className="text-2xl font-bold text-[var(--color-ink)]">{title}</h1>
      <p className="mt-3 max-w-[var(--measure)] text-base leading-6 text-[var(--color-muted)]">{body}</p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-6 inline-flex min-h-12 items-center rounded-[var(--radius-control)] bg-[var(--color-action)] px-4 text-sm font-semibold text-[var(--color-on-action)] transition-colors duration-[120ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:bg-[var(--color-action-hover)] active:bg-[var(--color-action-pressed)]"
      >
        Try again
      </button>
    </div>
  );
};
