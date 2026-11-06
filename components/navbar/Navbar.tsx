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
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3">
        <Logo />
        <div className="order-3 w-full md:order-none md:w-auto md:min-w-0 md:flex-1">
          <SearchBar query={query} onQueryChange={onQueryChange} />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <CatalogLink />
          <UserMenu />
        </div>
      </div>
    </header>
  );
};
