import Link from "next/link";

const NotFound = () => {
  return (
    <main
      id="content"
      className="mx-auto flex w-full max-w-[var(--container)] flex-1 flex-col px-[var(--gutter)] py-12"
    >
      <h1 className="text-2xl font-bold text-[var(--color-ink)]">Page not found</h1>
      <p className="mt-3 max-w-[var(--measure)] text-base leading-6 text-[var(--color-muted)]">
        This preview only includes the home list, the catalog, and a room page.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center rounded-[var(--radius-control)] bg-[var(--color-action)] px-4 text-sm font-semibold text-[var(--color-on-action)]"
        >
          Go to home
        </Link>
        <Link
          href="/catalog"
          className="inline-flex min-h-12 items-center rounded-[var(--radius-control)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-sm font-semibold text-[var(--color-ink)]"
        >
          Browse catalog
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
