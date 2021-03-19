import React from 'react'
import { StyledLayout } from '../src/styles/global/StyledLayout'

export const Layout = ({ children }) => {
    return(
        <StyledLayout>
            <header>
                Header
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </StyledLayout>
    )
}