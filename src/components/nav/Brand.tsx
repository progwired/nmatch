import React from 'react'
import { NavbarBrand } from '@nextui-org/react'
import Link from 'next/link'

function Brand() {
    return (
        <NavbarBrand className='brand' as={Link} href={"/"}>
            <div className='flex font-bold text-2xl'>
                <span className='text-green-700'>N</span>
                <span className='text-blue-700'>M</span>
            </div>
        </NavbarBrand>
    )
}

export default Brand
