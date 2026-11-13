import type { CategoryPanel } from "@/types/vehicle";

export const categoryPanels: CategoryPanel[] = [
  {
    id: "sedan",
    nameKey: "categories.sedan.name",
    descriptionKey: "categories.sedan.description",
    image: "/images/categories/sedans.jpg",
    altKey: "images.sedanAlt",
  },
  {
    id: "suv",
    nameKey: "categories.suv.name",
    descriptionKey: "categories.suv.description",
    image: "/images/categories/suvs.jpg",
    altKey: "images.suvAlt",
  },
  {
    id: "hatchback",
    nameKey: "categories.hatchback.name",
    descriptionKey: "categories.hatchback.description",
    image: "/images/categories/hatchbacks.jpg",
    altKey: "images.hatchbackAlt",
  },
  {
    id: "pickup",
    nameKey: "categories.pickup.name",
    descriptionKey: "categories.pickup.description",
    image: "/images/categories/pickups.jpg",
    altKey: "images.pickupAlt",
  },
];
