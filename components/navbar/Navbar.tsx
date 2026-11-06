import { CatalogLink } from "@/components/navbar/CatalogLink";
import { Logo } from "@/components/navbar/Logo";
import { SearchBar } from "@/components/navbar/SearchBar";
import { UserMenu } from "@/components/navbar/UserMenu";

type NavbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
};

export const Navbar = ({ query, onQueryChange }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-20 min-h-16 border-b border-[var(--color-subtle)] bg-[var(--color-surface)] md:min-h-[4.5rem]">
      <div className="mx-auto flex max-w-[var(--container)] flex-wrap items-center gap-3 px-[var(--gutter)] py-3">
        <Logo />
        <div className="order-3 w-full md:order-none md:w-auto md:min-w-0 md:flex-1">
          <SearchBar query={query} onQueryChange={onQueryChange} />
        </div>
        <nav aria-label="Primary" className="ml-auto flex items-center gap-2">
          <CatalogLink />
          <UserMenu />
        </nav>
      </div>
    </header>
  );
};
