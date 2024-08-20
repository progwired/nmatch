"use client"
import React from 'react'
import topnavlist from '@/data/nav'
import { Link, NavbarItem } from '@nextui-org/react'
import { usePathname } from 'next/navigation';

export interface NavLinkProps {
    label: string;
    href: string;
}

function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {
                topnavlist.map(({ label, href }: NavLinkProps) =>
                    <NavbarItem
                        key={label}
                        isActive={pathname === href}
                        as={Link}
                        href={href}>{label}</NavbarItem>
                )
            }
        </>
    )
}

export default NavLinks
