import Link from "next/link";

export const SiteFooter = () => {
  return (
    <footer className="mt-auto border-t border-[var(--color-subtle)] bg-[var(--color-surface)] px-[var(--gutter)] py-8">
      <div className="mx-auto grid w-full max-w-[var(--container)] gap-6">
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/" className="text-sm font-semibold text-[var(--color-link)] underline">
            Home
          </Link>
          <Link href="/catalog" className="text-sm font-semibold text-[var(--color-link)] underline">
            Catalog
          </Link>
        </nav>
        <p className="max-w-[var(--measure)] text-sm text-[var(--color-muted)]">
          Academic preview of a vacation-rental interface. The mark below is a visual credit and does
          not state an official partnership.
        </p>
        {/* Byte-exact brand file. next/image would recompress or rewrite it. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/lockups/signal-stacked.svg"
          alt="4Geeks por Divinivid"
          width={600}
          height={300}
          className="block h-auto w-[280px] shrink-0 sm:hidden"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/lockups/signal-horizontal.svg"
          alt="4Geeks por Divinivid"
          width={1000}
          height={160}
          className="hidden h-auto w-[400px] shrink-0 sm:block"
        />
      </div>
    </footer>
  );
};
