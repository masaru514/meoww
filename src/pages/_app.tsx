import React, { FC } from 'react'
import { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <header>
      <h1>Hello world</h1>
    </header>
    <CssBaseline />
    <Component {...pageProps} />
    <footer>フッターです</footer>
  </>
)

export default CustomApp
