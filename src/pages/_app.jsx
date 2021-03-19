import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Layout } from '../../components/Layout'
import { DashboardLayout } from '../../components/DashboardLayout'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps, router }) => {
  const componentDidMount = () => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  if (router.pathname.startsWith('/dashboard/')) {
    return (
      <ThemeProvider theme={theme}>
        <DashboardLayout>
          <Component {...pageProps} />
          <GlobalStyle />
        </DashboardLayout>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
