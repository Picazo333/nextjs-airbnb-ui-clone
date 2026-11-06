import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="shrink-0 text-lg font-semibold tracking-tight text-brand"
    >
      airbnb
    </Link>
  );
};
