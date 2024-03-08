import FeaturedCard from "@/components/ui/FeaturedCard";

export default function Featured() {
  return (
    <section>
        <h2>Today&apos;s Special</h2>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <FeaturedCard title="Name 1" imgUrl="/images/common/1.jpg" />
            <FeaturedCard title="Name 2" imgUrl="/images/common/2.jpg" />
            <FeaturedCard title="Name 3" imgUrl="/images/common/3.jpg" />
            <FeaturedCard title="Name 4" imgUrl="/images/common/4.jpg" />
        </div>
    </section>
  )
}
