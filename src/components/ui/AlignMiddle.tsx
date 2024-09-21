import { PageProps } from '@/app/layout'
import React from 'react'

function AlignMiddle({ children }: PageProps) {
    return (
        <div className='flex items-center h-full'>
            {children}
        </div>
    )
}

export default AlignMiddle
