import About from "./About";
import CTA from "./CTA";
import Category from "./Category";
import Hero from "./Hero";
import ShortGallery from "./ShortGallery";
import ShortMenu from "./ShortMenu";
import Testimonial from "./Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <ShortMenu />
      <About />
      <Testimonial />
      <ShortGallery />
      <CTA />
    </main>
  );
}
