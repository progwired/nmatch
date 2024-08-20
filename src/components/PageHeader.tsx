import React from 'react'
import { PageProps } from '@/app/layout'
import TopNav from './navs/TopNav'

function PageHeader() {
    return (
        <header className='page-header'>
            <TopNav />
        </header>
    )
}

export default PageHeader
