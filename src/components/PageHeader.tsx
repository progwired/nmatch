import React from 'react'
import Brand from './nav/Brand'
import TopNav from './nav/TopNav'
import UserNav from './nav/UserNav'

function PageHeader() {
    return (
        <header className='page-header'>
            <nav>
                <Brand />
                <TopNav />
                <UserNav />
            </nav>
        </header>
    )
}

export default PageHeader
