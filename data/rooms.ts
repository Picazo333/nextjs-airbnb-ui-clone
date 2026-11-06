import type { Listing } from "@/types/listing";
import type { Amenity, Room, RoomPhoto } from "@/types/room";

const amenity = (icon: string, label: string): Amenity => ({ icon, label });

const wifi = amenity("📶", "Wifi");
const kitchen = amenity("🍳", "Kitchen");
const washer = amenity("🧺", "Washer");
const parking = amenity("🅿️", "Free parking");
const air = amenity("❄", "Air conditioning");
const workspace = amenity("💻", "Workspace");
const patio = amenity("🌿", "Patio");
const breakfast = amenity("☕", "Breakfast");

const photos = (tone: Room["tone"], label: string): RoomPhoto[] => [
  { label, tone },
  { label: "Bedroom", tone: "sand" },
  { label: "Kitchen", tone: "stone" },
  { label: "Outdoor space", tone: "forest" },
];

export const rooms: Room[] = [
  {
    id: "river-studio",
    title: "River studio",
    location: "Porto, Portugal",
    pricePerNight: 98,
    rating: 4.7,
    category: "trending",
    photoLabel: "River window",
    tone: "lagoon",
    reviewCount: 64,
    hostName: "Inês Costa",
    yearsHosting: 3,
    maxGuests: 2,
    photos: photos("lagoon", "River window"),
    amenities: [wifi, kitchen, workspace],
  },
  {
    id: "pine-cabin",
    title: "Pine cabin",
    location: "Gerês, Portugal",
    pricePerNight: 120,
    rating: 4.81,
    category: "cabins",
    photoLabel: "Cabin porch",
    tone: "forest",
    reviewCount: 91,
    hostName: "Rui Almeida",
    yearsHosting: 5,
    maxGuests: 4,
    photos: photos("forest", "Cabin porch"),
    amenities: [wifi, kitchen, patio, breakfast],
  },
  {
    id: "glass-loft",
    title: "Glass loft",
    location: "Lisbon, Portugal",
    pricePerNight: 175,
    rating: 4.88,
    category: "trending",
    photoLabel: "City glass",
    tone: "dusk",
    reviewCount: 210,
    hostName: "Helena Vargas",
    yearsHosting: 4,
    maxGuests: 3,
    photos: photos("dusk", "City glass"),
    amenities: [wifi, kitchen, air, workspace],
  },
  {
    id: "cliff-cottage",
    title: "Cliff cottage",
    location: "Ericeira, Portugal",
    pricePerNight: 189,
    rating: 4.92,
    category: "beach",
    photoLabel: "Ocean deck",
    tone: "sea",
    reviewCount: 128,
    hostName: "Mara Oliveira",
    yearsHosting: 6,
    maxGuests: 4,
    photos: photos("sea", "Ocean deck"),
    amenities: [wifi, kitchen, washer, patio],
  },
  {
    id: "concrete-atelier",
    title: "Concrete atelier",
    location: "Porto, Portugal",
    pricePerNight: 198,
    rating: 4.79,
    category: "design",
    photoLabel: "Studio light",
    tone: "stone",
    reviewCount: 73,
    hostName: "Tiago Nunes",
    yearsHosting: 2,
    maxGuests: 2,
    photos: photos("stone", "Studio light"),
    amenities: [wifi, workspace, air, kitchen],
  },
  {
    id: "azores-house",
    title: "Cliff house",
    location: "São Miguel, Portugal",
    pricePerNight: 220,
    rating: 4.86,
    category: "islands",
    photoLabel: "Island view",
    tone: "clay",
    reviewCount: 156,
    hostName: "Beatriz Melo",
    yearsHosting: 7,
    maxGuests: 5,
    photos: photos("clay", "Island view"),
    amenities: [wifi, kitchen, parking, patio],
  },
  {
    id: "dune-house",
    title: "White dune house",
    location: "Comporta, Portugal",
    pricePerNight: 240,
    rating: 4.85,
    category: "beach",
    photoLabel: "Dune path",
    tone: "sand",
    reviewCount: 102,
    hostName: "Leonor Pires",
    yearsHosting: 8,
    maxGuests: 6,
    photos: photos("sand", "Dune path"),
    amenities: [wifi, kitchen, parking, air, patio],
  },
  {
    id: "pool-terrace",
    title: "Terrace with pool",
    location: "Lagos, Portugal",
    pricePerNight: 305,
    rating: 4.93,
    category: "pools",
    photoLabel: "Pool deck",
    tone: "rose",
    reviewCount: 188,
    hostName: "André Sousa",
    yearsHosting: 9,
    maxGuests: 8,
    photos: photos("rose", "Pool deck"),
    amenities: [wifi, kitchen, amenity("🏊", "Pool"), air, parking],
  },
  {
    id: "stone-manor",
    title: "Stone manor",
    location: "Sintra, Portugal",
    pricePerNight: 640,
    rating: 4.97,
    category: "mansions",
    photoLabel: "Manor hall",
    tone: "dusk",
    reviewCount: 76,
    hostName: "Clara Mendes",
    yearsHosting: 11,
    maxGuests: 10,
    photos: photos("dusk", "Manor hall"),
    amenities: [wifi, kitchen, parking, breakfast, patio, air],
  },
];

export const listings: Listing[] = rooms;

export const getRoom = (id: string): Room | undefined => {
  return rooms.find((room) => room.id === id);
};
