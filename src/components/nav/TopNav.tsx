import React from 'react'
import NavLink, { NavProps } from './NavLink'
import dataTopNav from '@/static/data/topnav'
import { NavbarContent } from '@nextui-org/react'

function TopNav() {

    const renderedNav = dataTopNav.map(({ href, label }: NavProps) => {
        return <NavLink key={href} href={href} label={label} />
    })

    return (
        <NavbarContent
            className='top-nav'
            justify='center'
        >
            {renderedNav}
        </NavbarContent>
    )
}

export default TopNav
