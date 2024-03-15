import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function CTA() {
  return (
    <section className='bg-muted flex-center'>
      <div className="w-full md:w-2/3 flex-center gap-6 flex-col text-center">
        <h2 className='mb-0'>Secure your spot: Reserve at the Cofeco</h2>
        <div>Reserve your table today to enjoy your favorite brew without the wait. Experience the convenience of guaranteed seating by booking now!</div>
        <Link className={buttonVariants()} href="/reservation">Reserve Now</Link>
      </div>
    </section>
  )
}
