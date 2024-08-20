import React from 'react'
import { PageProps } from '@/app/layout'
import { NextUIProvider } from '@nextui-org/react'

function Providers({ children }: PageProps) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}

export default Providers
