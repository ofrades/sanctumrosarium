import * as React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import nookies, { setCookie } from 'nookies'
import GlobalStyle from '../styles/global'
import Header from '../components/Header'
import Footer from '../components/Footer/index'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

const getTheme = (selected: 'light' | 'dark') =>
  selected === 'light' ? light : dark

const THEME_COOKIE_KEY = 'theme'

/**
 * <TesourosFieisApp />
 * @param Component
 * @param pageProps
 * @param currentTheme
 */
const TesourosFieisApp = ({ Component, pageProps, currentTheme }) => {
  const [theme, setTheme] = React.useState(getTheme(currentTheme))

  /**
   * Handles the switch of the
   * @param isDark: boolean
   */
  const handeToggleTheme = (isDark: boolean) => {
    const selectedTheme = getTheme(isDark ? 'dark' : 'light')
    setTheme(selectedTheme)
    setCookie(null, THEME_COOKIE_KEY, selectedTheme.title, {})
  }
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <Header toggleTheme={handeToggleTheme} />
      <Component {...pageProps} />
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  )
}

/**
 * Get cookies in the server
 * @param Component
 * @param ctx
 */
TesourosFieisApp.getInitialProps = async ({ Component, ctx }) => {
  const isProduction = process.env.NODE_ENV === 'production'
  const cookies = nookies.get(ctx) || {}

  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}
  return {
    pageProps,
    currentTheme: cookies[THEME_COOKIE_KEY] || 'light',
    isProduction,
  }
}

export default TesourosFieisApp
