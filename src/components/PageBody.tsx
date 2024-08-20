import React from 'react'
import { PageProps } from '@/app/layout'

function PageBody({ children }: PageProps) {
    return (
        <main className="page-body">
            {children}
        </main>
    )
}
export default PageBody
