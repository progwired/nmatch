import Link from 'next/link'
import React from 'react'

function MembersPage() {
    return (
        <div>
            <h3 className="text-3xl">
                This will be the Members page
            </h3>
            <Link href={"/"}>Go back home</Link>
        </div>
    )
}

export default MembersPage
