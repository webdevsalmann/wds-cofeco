import MenuItemCard from "@/components/ui/MenuItemCard";
import { datas } from "@/lib/data";

export default function ShortMenu() {
    return (
        <section>
            <h2>Menu</h2>
            <div className="grid gap-8 md:grid-cols-2">
                <div className="">
                    <h3 className="mt-8 text-primary" id="coffee">Coffee</h3>
                    <div className="mt-8 grid gap-6 ">
                        {datas[0].items.slice(0, 4).map((item, i) => (
                            <MenuItemCard key={item.title + "home" + i} title={item.name} description={item.desc} price={item.price} imgUrl={item.imgUrl} />
                        ))}
                    </div>
                </div>

                <div className="">
                    <h3 className="mt-8 text-primary" id="tea">Tea</h3>
                    <div className="mt-8 grid gap-6 ">
                        {datas[1].items.slice(0, 4).map((item, i) => (
                            <MenuItemCard key={item.title + "home" + i} title={item.name} description={item.desc} price={item.price} imgUrl={item.imgUrl} />
                        ))}
                    </div>
                </div>

                <div className="">
                    <h3 className="mt-8 text-primary" id="snacks">Snacks</h3>
                    <div className="mt-8 grid gap-6 ">
                        {datas[2].items.slice(0, 4).map((item, i) => (
                            <MenuItemCard key={item.title + "home" + i} title={item.name} description={item.desc} price={item.price} imgUrl={item.imgUrl} />
                        ))}
                    </div>
                </div>

                <div className="">
                    <h3 className="mt-8 text-primary" id="desserts">Desserts</h3>
                    <div className="mt-8 grid gap-6 ">
                        {datas[3].items.slice(0, 4).map((item, i) => (
                            <MenuItemCard key={item.title + "home" + i} title={item.name} description={item.desc} price={item.price} imgUrl={item.imgUrl} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
