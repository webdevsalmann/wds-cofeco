import MenuItemCard from "@/components/ui/MenuItemCard"
import { buttonVariants } from "@/components/ui/button"
import { datas } from "@/lib/data"
import Link from "next/link"

export default function page() {
  return (
    <section>
      <h2>What We Serve Here</h2>
      <div className="flex-center gap-4">
        <Link className={buttonVariants({ variant:"outline" })} href="/menu#coffee">Coffee</Link>
        <Link className={buttonVariants({ variant:"outline" })} href="/menu#tea">Tea</Link>
        <Link className={buttonVariants({ variant:"outline" })} href="/menu#snacks">Snacks</Link>
        <Link className={buttonVariants({ variant:"outline" })} href="/menu#desserts">Desserts</Link>
      </div>

      <h3 className="mt-16 text-primary" id="coffee">Coffee</h3>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {datas[0].items.map((item, i) => (
          <MenuItemCard key={item.title} title={item.name} description={item.desc} price={item.price} />
        ))}
      </div>

      <h3 className="mt-16 text-primary" id="tea">Tea</h3>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {datas[1].items.map((item, i) => (
          <MenuItemCard key={item.title} title={item.name} description={item.desc} price={item.price} />
        ))}
      </div>

      <h3 className="mt-16 text-primary" id="snacks">Snacks</h3>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {datas[2].items.map((item, i) => (
          <MenuItemCard key={item.title} title={item.name} description={item.desc} price={item.price} />
        ))}
      </div>

      <h3 className="mt-16 text-primary" id="desserts">Desserts</h3>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {datas[3].items.map((item, i) => (
          <MenuItemCard key={item.title} title={item.name} description={item.desc} price={item.price} />
        ))}
      </div>
    </section>
  )
}
