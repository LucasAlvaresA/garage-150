import type { FuelType, TransmissionType, VehicleCategory } from "@/types/vehicle";
import type { TranslationKey } from "@/i18n/translations";

export const categoryLabelKeys: Record<VehicleCategory, TranslationKey> = {
  sedan: "category.sedan",
  suv: "category.suv",
  hatchback: "category.hatchback",
  pickup: "category.pickup",
};

export const transmissionLabelKeys: Record<TransmissionType, TranslationKey> = {
  cvt: "transmission.cvt",
  automatic6: "transmission.automatic6",
  manual6: "transmission.manual6",
};

export const fuelLabelKeys: Record<FuelType, TranslationKey> = {
  flex: "fuel.flex",
  gasoline: "fuel.gasoline",
  diesel: "fuel.diesel",
};
