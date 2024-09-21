import React from 'react'
import NavLink from './NavLink'

function TopNav() {
    return (
        <div className='top-nav'>
            <NavLink href='/performance' label='Performance' />
            <NavLink href='/reliability' label='Reliability' />
            <NavLink href='/scale' label='Scale' />
        </div>
    )
}

export default TopNav
