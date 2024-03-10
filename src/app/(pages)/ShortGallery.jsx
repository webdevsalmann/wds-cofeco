import ImageCard from "@/components/ui/ImageCard";

export default function ShortGallery() {
  return (
    <section>
      <h2>Gallery</h2>
      <div className="mt-12 w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-x-4">
        <ImageCard imgUrl="/images/gallery/1.jpg" />
        <ImageCard imgUrl="/images/gallery/2.jpg" />
        <ImageCard imgUrl="/images/gallery/6.jpg" />
        <ImageCard imgUrl="/images/gallery/8.jpg" />
        <ImageCard imgUrl="/images/gallery/5.jpg" />
      </div>
    </section>
  )
}
