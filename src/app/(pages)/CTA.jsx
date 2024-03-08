import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function CTA() {
  return (
    <section className='bg-muted flex-center'>
      <div className="w-full md:w-2/3 flex-center gap-6 flex-col text-center">
        <h2 className='mb-0'>View Our Menu</h2>
        <div>Explore our mouthwatering menu of specialty coffees, delectable pastries, and savory snacks. Find your new favorites today!</div>
        <Link className={buttonVariants()} href="/menu">View Menu</Link>
      </div>
    </section>
  )
}
