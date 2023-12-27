"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import MenuOverlay from './MenuOverlay'

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed top-0 border border-[#33353F] left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex container lg:py-6 flex-wrap items-center justify-between mx-auto px-4 py-5 '>
                <Link href={"/"} className='text-xl md:text-3xl text-transparent z-30 bg-clip-text bg-gradient-to-r from-yellow-500 to-red-700 font-semibold'>Umar Dev Portfolio</Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className='h-5 w-5' />
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className='h-5 w-5' />
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row space-x-4'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}

        </nav>
    )
}

export default Navbar