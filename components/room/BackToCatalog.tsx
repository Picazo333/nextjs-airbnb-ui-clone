import Link from "next/link";

export const BackToCatalog = () => {
  return (
    <Link
      href="/catalog"
      className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-ink)]"
    >
      ← Back to catalog
    </Link>
  );
};
