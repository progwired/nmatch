"use client"
import React, { useState } from 'react'
import UserNavSigned from './UserNavSigned'
import NavLink from './NavLink'
import { NavbarContent } from '@nextui-org/react'

function UserNav() {

    const [signed] = useState<boolean>(!true)

    const renderedNav = signed ?
        <UserNavSigned /> :
        <>
            <NavLink href='/login' label='Login' />
            <NavLink href='/register' label='Register' />
        </>

    return (
        <NavbarContent className='user-nav' justify='end'>
            {renderedNav}
        </NavbarContent>
    )
}

export default UserNav
