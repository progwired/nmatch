import { PageProps } from '@/app/layout'
import React from 'react'

function PageBody({ children }: PageProps) {
    return (
        <main className='page-body'>
            <div className="page-content">
                {children}
            </div>
        </main>
    )
}

export default PageBody
