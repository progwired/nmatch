import React from 'react'
import { PageProps } from '../layout'

function AuthLayout({ children }: PageProps) {
    return (
        <div className='flex text-center items-center w-full'>
            {children}
        </div>
    )
}

export default AuthLayout
