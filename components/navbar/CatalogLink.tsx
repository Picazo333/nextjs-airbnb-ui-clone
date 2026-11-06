import Link from "next/link";

export const CatalogLink = () => {
  return (
    <Link
      href="/catalog"
      className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold text-[var(--color-ink)]"
    >
      Catalog
    </Link>
  );
};
