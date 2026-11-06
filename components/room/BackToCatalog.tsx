import Link from "next/link";

export const BackToCatalog = () => {
  return (
    <Link
      href="/catalog"
      className="inline-flex h-11 items-center text-sm font-medium text-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      ← Back to catalog
    </Link>
  );
};
