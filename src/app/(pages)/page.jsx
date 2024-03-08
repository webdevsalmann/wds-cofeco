import About from "./About";
import CTA from "./CTA";
import Featured from "./Featured";
import Hero from "./Hero";
import Testimonial from "./Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <About />
      <Testimonial />
      <CTA />
    </main>
  );
}
