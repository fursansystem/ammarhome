import ScrollDemo from "@/components/blocks/demo";
import CinematicDemo from "@/components/blocks/cinematic-demo";

export default function Home() {
  return (
    <main>
      <section>
        <CinematicDemo />
      </section>
      <section>
        <ScrollDemo />
      </section>
    </main>
  );
}
