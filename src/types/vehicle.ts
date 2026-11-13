export type VehicleCategory = "sedan" | "suv" | "hatchback" | "pickup";

export type TransmissionType = "cvt" | "automatic6" | "manual6";

export type FuelType = "flex" | "gasoline" | "diesel";

export interface LocalizedText {
  "pt-BR": string;
  en: string;
}

export interface VehicleFuelConsumption {
  city: {
    ethanol: number;
    gasoline: number;
  };
  highway: {
    ethanol: number;
    gasoline: number;
  };
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  version: string;
  year: number;
  price: number;
  category: VehicleCategory;
  image: string;
  engine: string;
  horsepower: number;
  maximumSpeed: number;
  zeroToHundred: number;
  fuelConsumption: VehicleFuelConsumption;
  fuelTankCapacity: number;
  transmission: TransmissionType;
  fuel: FuelType;
  shortDescription: LocalizedText;
  featured?: boolean;
}

export interface CategoryPanel {
  id: VehicleCategory;
  nameKey: "categories.sedan.name" | "categories.suv.name" | "categories.hatchback.name" | "categories.pickup.name";
  descriptionKey:
    | "categories.sedan.description"
    | "categories.suv.description"
    | "categories.hatchback.description"
    | "categories.pickup.description";
  image: string;
  altKey: "images.sedanAlt" | "images.suvAlt" | "images.hatchbackAlt" | "images.pickupAlt";
}
