'use client'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
  

const MobileNav = () => {

    const pathname = usePathname();

  return (
    <header className="header">
        <Link href='/' className="flex items-center gap-2 md:py-2">
            <Image 
                src='/GenAI_Burma.png'
                alt="logo"
                width={70}
                height={70}
            />
        </Link>
        <nav className="flex gap-2">
            <SignedIn>
                <UserButton afterSignOutUrl="/"/>
                <Sheet>
                    <SheetTrigger>
                        <Image 
                            src='/assets/icons/menu.svg'
                            alt="menu"
                            width={32}
                            height={32}
                            className="cursor-pointer"
                        />
                    </SheetTrigger>
                    <SheetContent className="sheet-content sm:w-64">
                        <>
                            <Image 
                                src='/GenAI_Burma.png'
                                alt="logo"
                                width={100}
                                height={100}
                            />
                            <ul className='header-nav_elements'>
                                {navLinks.map((link) => {
                                    const isActive = link.route === pathname

                                    return (
                                        <li key={link.route} className={`sidebar-nav_element group ${
                                            isActive ? 'bg-crimson-100 text-white' : 'text-black'
                                        }`}>
                                            <Link className='sidebar-link cursor-pointer' href={link.route}>
                                                <Image 
                                                    src={link.icon}
                                                    alt='logo'
                                                    width={24}
                                                    height={24}
                                                    className={`${isActive && 'brightness-200'}`}
                                                />
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </>
                    </SheetContent>
                </Sheet>
            </SignedIn>

            <SignedOut>
                    <Button 
                        asChild
                        className='button bg-crimson-200 bg-cover'
                    >
                        <Link href='/sign-in/'>
                            Login
                        </Link>
                    </Button>
                </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav