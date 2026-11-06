import Link from "next/link";

type EmptyStateProps = {
  title: string;
  body: string;
  href?: string;
  action?: string;
  onAction?: () => void;
};

export const EmptyState = ({ title, body, href, action, onAction }: EmptyStateProps) => {
  return (
    <div className="rounded-[var(--radius-card)] border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-10">
      <h2 className="text-xl font-bold text-[var(--color-ink)]">{title}</h2>
      <p className="mt-2 max-w-[var(--measure)] text-base leading-6 text-[var(--color-muted)]">{body}</p>
      {href && action ? (
        <Link
          href={href}
          className="mt-6 inline-flex min-h-12 items-center rounded-[var(--radius-control)] bg-[var(--color-action)] px-4 text-sm font-semibold text-[var(--color-on-action)]"
        >
          {action}
        </Link>
      ) : null}
      {onAction && action ? (
        <button
          type="button"
          onClick={onAction}
          className="mt-6 inline-flex min-h-12 items-center rounded-[var(--radius-control)] bg-[var(--color-action)] px-4 text-sm font-semibold text-[var(--color-on-action)] transition-colors duration-[120ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:bg-[var(--color-action-hover)] active:bg-[var(--color-action-pressed)]"
        >
          {action}
        </button>
      ) : null}
    </div>
  );
};
