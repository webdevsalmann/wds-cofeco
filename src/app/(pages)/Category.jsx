import FeaturedCard from "@/components/ui/FeaturedCard";

export default function Category() {
    return (
        <section>
            <h2>Choose Whatever You Like</h2>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <FeaturedCard title="Coffee" imgUrl="/images/common/1.jpg" href="/menu#coffee" />
                <FeaturedCard title="Tea" imgUrl="/images/tea/1.jpg" href="/menu#tea" />
                <FeaturedCard title="Snacks" imgUrl="/images/snacks/1.jpg" href="/menu#snacks" />
                <FeaturedCard title="Desserts" imgUrl="/images/desserts/1.jpg" href="/menu#desserts" />
            </div>
        </section>
    )
}
