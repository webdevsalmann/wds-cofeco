import ImageCard from "@/components/ui/ImageCard";

export default function Gallery() {
    return (
        <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-x-4">
            <ImageCard imgUrl="/images/gallery/person.jpg" />
            <ImageCard imgUrl="/images/gallery/1.jpg" />
            <ImageCard imgUrl="/images/gallery/2.jpg" />
            <ImageCard imgUrl="/images/gallery/3.jpg" />
            <ImageCard imgUrl="/images/gallery/4.jpg" />
            <ImageCard imgUrl="/images/gallery/5.jpg" />
        </div>
    );
}
