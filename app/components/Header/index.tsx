import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Switch from 'react-switch'
import { Container } from './styles'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

interface Props {
  toggleTheme(isDark: boolean): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)
  const router = useRouter()
  return (
    <Container>
      <Link href="/">
        <Image src="/faviconWhite.svg" width="32" height="32" />
      </Link>
      <Link href="/missa">
        <a className={router.pathname == '/missa' ? 'active' : ''}>Missa</a>
      </Link>
      <Link href="/salterio">
        <a className={router.pathname == '/salterio' ? 'active' : ''}>
          Saltério
        </a>
      </Link>
      <Link href="/ordo">
        <a className={router.pathname == '/ordo' ? 'active' : ''}>Ordo</a>
      </Link>
      <Link href="/catecismo">
        <a className={router.pathname == '/catecismo' ? 'active' : ''}>
          Catecismo
        </a>
      </Link>
      <Link href="/verdades">
        <a className={router.pathname == '/verdades' ? 'active' : ''}>
          Verdades
        </a>
      </Link>
      <Link href="/ritual">
        <a className={router.pathname == '/ritual' ? 'active' : ''}>Ritual</a>
      </Link>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        height={10}
        width={40}
        handleDiameter={30}
        offColor={shade(0.5, colors.text)}
        onColor={shade(0.5, colors.text)}
      />
    </Container>
  )
}

export default Header
