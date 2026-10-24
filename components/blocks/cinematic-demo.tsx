import { CinematicHero } from "@/components/ui/cinematic-landing-hero";

export default function CinematicHeroDemo() {
  return (
    <div className="overflow-x-hidden w-[100%] min-h-screen">
      <CinematicHero 
        brandName="Ammar"
        tagline1="Building Digital Experiences,"
        tagline2="One Pixel at a Time."
        cardHeading="Crafting Modern Solutions."
        cardDescription="Expert in Next.js, Tailwind, and high-performance animations tailored for unique business needs."
        metricValue={50}
        metricLabel="Projects Done"
        ctaHeading="Let's Build Together."
        ctaDescription="Transform your ideas into stunning digital realities with a focus on UX and performance."
      />
    </div>
  );
}
