"use client"
import React, { useState } from 'react'
import UserNavSigned from './UserNavSigned'
import NavLink from './NavLink'

function UserNav() {

    const [signed] = useState<boolean>(!true)

    const renderedNav = signed ?
        <UserNavSigned /> :
        <div className='user-nav'>
            <NavLink href='/login' label='Login' />
            <NavLink href='/register' label='Register' />
        </div>

    return (
        renderedNav
    )
}

export default UserNav
