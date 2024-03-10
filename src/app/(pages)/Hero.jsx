import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";


export default function Hero() {
    return (
        <section className="relative min-h-[30rem] max-h-[40rem] flex-center bg-[url('/images/common/4.jpg')] bg-cover">
            <div className="relative w-full min-h-full text-center text-neutral-50">
                    <h1>WELCOME TO COFECO</h1>
                    <p className="text-lg">where every cup tells a story. Experience the finest brews crafted with passion and precision.</p>
                    <div className="mt-6 flex-center gap-4">
                        <Link className={buttonVariants()} href="/reservation">Make Reservation</Link>
                        <Link className={buttonVariants({variant:"secondary"})} href="/menu">View Menu</Link>
                    </div>
            </div>
        </section>
    )
}
