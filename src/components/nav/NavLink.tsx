import Link from 'next/link';
import React from 'react'

interface Props {
    href: string;
    label: string;
}

function NavLink({ href, label }: Props) {
    return (
        <Link href={href}>{label}</Link>
    )
}

export default NavLink
