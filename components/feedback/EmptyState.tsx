import Link from "next/link";

type EmptyStateProps = {
  title: string;
  body: string;
  href?: string;
  action?: string;
};

export const EmptyState = ({ title, body, href, action }: EmptyStateProps) => {
  return (
    <div className="rounded-xl border border-dashed border-neutral-300 px-4 py-10 text-center">
      <h2 className="text-base font-semibold text-neutral-900">{title}</h2>
      <p className="mt-2 text-sm text-neutral-600">{body}</p>
      {href && action ? (
        <Link
          href={href}
          className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-neutral-900 px-4 text-sm font-medium text-white"
        >
          {action}
        </Link>
      ) : null}
    </div>
  );
};
