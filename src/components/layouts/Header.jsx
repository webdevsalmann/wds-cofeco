"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from "@/components/ui/button"
import ThemeToggleBtn from "@/components/ui/ThemeToggleBtn"
import { Ilogo } from '../svgs/svgs';
import { AlignRight, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Menu',
    href: '/menu'
  },
  {
    title: 'Gallery',
    href: '/gallery'
  },
  {
    title: 'reservation',
    href: '/reservation'
  },
]


export default function Header() {
  const path = usePathname();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <header className='w-full bg-background'>
      <nav className="px-[5%] py-2 w-full grid grid-cols-2 justify-center items-center">

        <Link className="w-fit flex-center" href="/">
          <Ilogo className="w-16 h-16 text-primary" />
        </Link>


        <div className="w-8 h-8 md:hidden justify-self-end"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? <X /> : <AlignRight />}
        </div>

        <ul className={`link-box relative py-4 flex-center items-start flex-col gap-4 justify-self-start  md:justify-self-end md:flex-row md:flex ${isNavbarOpen ? 'flex' : 'hidden'}`}>
          {
            navLinks.map(item => (
              <Link className={`${buttonVariants({ variant: "ghost", size: 'sm' })} ${path === item.href && "bg-accent"} capitalize text-muted-foreground`} href={item.href} key={item.title}>{item.title}</Link>
            ))
          }
          <ThemeToggleBtn />
        </ul>
      </nav>
    </header>
  )
}
