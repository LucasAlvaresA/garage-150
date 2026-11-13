import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedCars } from "@/components/sections/FeaturedCars";
import { FeaturedVehicle } from "@/components/sections/FeaturedVehicle";
import { Hero } from "@/components/sections/Hero";
import { VehicleCategories } from "@/components/sections/VehicleCategories";
import { BrandMarquee } from "@/components/ui/BrandMarquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <FeaturedCars />
      <VehicleCategories />
      <FeaturedVehicle />
      <AboutSection />
    </>
  );
}
