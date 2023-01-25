'use client'
import { useState } from 'react'
import { Navigation } from '../components/molecules/Navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0)
    return (
        <html>
            <head />
            <body>
                <header>
                    <Navigation />
                </header>
                {children}
            </body>
        </html>
    )
}
