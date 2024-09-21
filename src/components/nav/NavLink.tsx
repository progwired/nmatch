"use client"
import { NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export interface NavProps {
    href: string;
    label: string;
}

function NavLink({ href, label }: NavProps) {
    const pathName = usePathname();
    return (
        <NavbarItem isActive={href === pathName} key={href}
            as={Link}
            href={href}
            className='nav-item'
        > {label}</NavbarItem>
    )
}

export default NavLink
