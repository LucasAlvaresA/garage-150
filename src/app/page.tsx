import { FeaturedCars } from "@/components/sections/FeaturedCars";
import { FeaturedVehicle } from "@/components/sections/FeaturedVehicle";
import { Hero } from "@/components/sections/Hero";
import { VehicleCategories } from "@/components/sections/VehicleCategories";

export default function HomePage() {
  return (
    <>
      <Hero />
      <VehicleCategories />
      <FeaturedVehicle />
      <FeaturedCars />
    </>
  );
}
