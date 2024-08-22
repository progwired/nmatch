import React from 'react'
import { PageProps } from '@/app/layout'
import { NextUIProvider } from '@nextui-org/react'

function Providers({ children }: PageProps) {
    return (
        <NextUIProvider>
            <div className="providers">
                {children}
            </div>
        </NextUIProvider>
    )
}

export default Providers
