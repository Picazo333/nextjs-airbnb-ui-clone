import type { Listing, PhotoTone } from "@/types/listing";

export interface RoomPhoto {
  label: string;
  tone: PhotoTone;
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface Room extends Listing {
  reviewCount: number;
  hostName: string;
  yearsHosting: number;
  photos: RoomPhoto[];
  amenities: Amenity[];
  maxGuests: number;
}
