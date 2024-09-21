import React from 'react'
import Brand from './nav/Brand'
import TopNav from './nav/TopNav'
import UserNav from './nav/UserNav'
import { Navbar } from '@nextui-org/react'

function PageHeader() {
    return (
        <nav className='page-header'>
            <Navbar
                classNames={{
                    item: [
                        "capitalize",
                    ]
                }}>
                <Brand />
                <TopNav />
                <UserNav />
            </ Navbar>
        </nav>
    )
}

export default PageHeader
