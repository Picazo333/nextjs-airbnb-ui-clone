type HostInfoProps = {
  name: string;
  yearsHosting: number;
};

export const HostInfo = ({ name, yearsHosting }: HostInfoProps) => {
  const years = yearsHosting === 1 ? "1 year hosting" : `${yearsHosting} years hosting`;

  return (
    <div className="flex items-center gap-3 border-y border-[var(--color-subtle)] py-4">
      <span
        aria-hidden="true"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-subtle)] text-sm font-semibold text-[var(--color-ink)]"
      >
        {name.slice(0, 1)}
      </span>
      <div>
        <p className="text-sm font-semibold text-[var(--color-ink)]">Hosted by {name}</p>
        <p className="text-sm text-[var(--color-muted)]">{years}</p>
      </div>
    </div>
  );
};
