import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { SimonStorySection } from "@/components/sections/SimonStorySection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { FeaturedAnimalsSection } from "@/components/sections/FeaturedAnimalsSection";
import { VillageSection } from "@/components/sections/VillageSection";
import { ConnectSection } from "@/components/sections/ConnectSection";
import { animals } from "@/data/animals";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Rescuer | Unexpected Rescues. Unconditional Love.",
  description:
    "Foster home-based cat rescue since 2018. Compassionate care for seniors, medical needs, and overlooked adults. If we can help, we will.",
};

export default function HomePage() {
  return (
    <main className="bg-black">
      <HeroSection />
      <MissionSection />
      <FeaturedAnimalsSection animals={animals} />
      <SimonStorySection />
      <PhilosophySection />
      <VillageSection />
      <ConnectSection />
    </main>
  );
}
