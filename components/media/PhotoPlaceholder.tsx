import type { PhotoTone } from "@/types/listing";

const tones: Record<PhotoTone, string> = {
  sea: "bg-sky-300",
  sand: "bg-amber-200",
  forest: "bg-emerald-300",
  dusk: "bg-indigo-300",
  clay: "bg-orange-200",
  rose: "bg-rose-200",
  stone: "bg-stone-300",
  lagoon: "bg-teal-200",
};

type PhotoPlaceholderProps = {
  tone: PhotoTone;
  label: string;
  className?: string;
};

export const PhotoPlaceholder = ({
  tone,
  label,
  className = "aspect-[4/3]",
}: PhotoPlaceholderProps) => {
  return (
    <div className={`flex items-end rounded-xl p-3 ${tones[tone]} ${className}`}>
      <span className="rounded-full bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-ink)]">
        {label}
      </span>
    </div>
  );
};
