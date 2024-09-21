import React from 'react'
import { NavbarBrand } from '@nextui-org/react'
import Link from 'next/link'
import BrandName from '@/components/ui/BrandName'

function Brand() {
    return (
        <NavbarBrand className='brand text-2xl' as={Link} href={"/"}>
            <BrandName />
        </NavbarBrand>
    )
}

export default Brand
