import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import Logo from '../components/Logo'

export const siteTitle = 'Next.js Sample website'

const Layout = ({ children, home }: { children: ReactNode, home?: boolean }) => {
  return (
    <SC>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to Next.js" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header>
        <Logo home={home ? true : false} />
      </header>

      <main>
        {children}
      </main>

      {!home && (
        <footer>
          <Link href="/">Back to home</Link>
        </footer>
      )}
    </SC>
  )
}

const SC = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;
`

export default Layout
