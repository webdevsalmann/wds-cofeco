import ImageCard from "@/components/ui/ImageCard";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function ShortGallery() {
  return (
    <section className="bg-muted">
      <h2>Gallery</h2>
      <div className="mt-12 w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-x-4">
        <ImageCard imgUrl="/images/gallery/1.jpg" />
        <ImageCard imgUrl="/images/gallery/2.jpg" />
        <ImageCard imgUrl="/images/gallery/3.jpg" />
        <ImageCard imgUrl="/images/gallery/4.jpg" />
        <ImageCard imgUrl="/images/gallery/5.jpg" />
        <ImageCard imgUrl="/images/gallery/6.jpg" />
        <ImageCard imgUrl="/images/gallery/7.jpg" />
        <ImageCard imgUrl="/images/gallery/8.jpg" />
      </div>
      <div className="flex-center">
        <Link className={`${buttonVariants({ variant: "outline" })} hover:underlin hover:bg-background hover:text-primary`} href="/gallery">
          View more Images
        </Link>
      </div>
    </section>
  )
}
