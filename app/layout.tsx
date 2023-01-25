'use client'
import { useState } from 'react'
import { Navigation } from '../components/molecules/Navigation'
import { TodoProvider } from '../contexts/TodoContext'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0)
    //useContextのProviderいったんここに設置
    return (
        <html>
            <head />
            <body>
                <header>
                    <Navigation />
                </header>
                <TodoProvider>{children}</TodoProvider>
            </body>
        </html>
    )
}
