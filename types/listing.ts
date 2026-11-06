export const categories = [
  { id: "all", label: "All", icon: "✦" },
  { id: "beach", label: "Beach", icon: "🏖" },
  { id: "mansions", label: "Mansions", icon: "🏰" },
  { id: "trending", label: "Trending", icon: "🔥" },
  { id: "cabins", label: "Cabins", icon: "🏕" },
  { id: "pools", label: "Pools", icon: "🏊" },
  { id: "islands", label: "Islands", icon: "🏝" },
  { id: "design", label: "Design", icon: "✎" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type StayCategory = Exclude<CategoryId, "all">;

export type PhotoTone =
  | "sea"
  | "sand"
  | "forest"
  | "dusk"
  | "clay"
  | "rose"
  | "stone"
  | "lagoon";

export interface Listing {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  category: StayCategory;
  photoLabel: string;
  tone: PhotoTone;
}
