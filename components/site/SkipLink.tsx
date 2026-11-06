import Link from "next/link";

export const SkipLink = () => {
  return (
    <Link
      href="#content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[70] focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-[var(--radius-control)] focus:bg-[var(--color-action)] focus:px-4 focus:font-semibold focus:text-[var(--color-on-action)]"
    >
      Skip to content
    </Link>
  );
};
