import React from "react";
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

const HamburgerMenu = () => (<div className='relative p-2'>
    <Menu customBurgerIcon={<HamburgerIcon />} width={'auto'} className='left-0 top-12' >
        <Links />
    </Menu>
</div>)

const HamburgerIcon = () => (<div className='p-1/2'><svg className="w-8 h-8 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></div>)

export const Links = () => (<>
    <Link href="/"><a className='font-bold p-4'>ABOUT</a></Link>
    <Link href="#aboutCard"><a className='font-bold p-4'>GALLERY</a></Link>
    <Link href="#serviceCard"><a className='font-bold p-4'>SERVICES</a></Link>
    <Link href="#videoCard"><a className='font-bold p-4'>VIDEO</a></Link>
    <Link href="#contactCard"><a className='font-bold p-4'>GET IN TOUCH</a></Link>

</>)

export default HamburgerMenu
