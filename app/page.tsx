import Hero from "@/components/sections/hero";
import Marquee from "@/components/layout/marquee";
import Premise from "@/components/sections/premise";
import TheSix from "@/components/sections/the-six";
import Practice from "@/components/sections/practice";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="grow pt-[72px]">
      <Hero />
      <Marquee />
      <Premise />
      <TheSix />
      <Practice />
      <Contact />
    </main>
  );
}
