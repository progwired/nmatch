import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import { GiMatchTip, GiSofa } from 'react-icons/gi'
import NavLinks from './NavLinks'

function TopNav() {

    return (
        <Navbar maxWidth="full"
            classNames={{
                item: [
                    "text-xl",
                    "text-white",
                    "capitalize",
                    "hover:text-slate-500",
                    "data-[active=true]:text-slate-900",
                ]
            }}>
            <NavbarBrand className='flex space-x-1'
                as={Link} href={"/"}>
                <GiSofa size={40}
                    className="text-slate-500" />
                <div className='font-bold text-3xl flex space-x-0'>
                    <span>L</span>
                    <span className="text-slate-500">Sofa</span>
                </div>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavLinks />
            </NavbarContent>
            <NavbarContent justify="end">
                <Button
                    variant='bordered'
                    className='text-white'
                    as={Link} href={"/login"}>login</Button>
                <Button
                    variant='bordered'
                    className='text-white'
                    as={Link} href={"/register"}>register</Button>
            </NavbarContent>
        </Navbar>
    )
}

export default TopNav
