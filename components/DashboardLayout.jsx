import React from 'react'
import { StyledDashboardLayout } from '../src/styles/global/StyledDashboardLayout'

export const DashboardLayout = ({ children }) => {
    return(
        <StyledDashboardLayout>
            <header>
                Header
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </StyledDashboardLayout>
    )
}