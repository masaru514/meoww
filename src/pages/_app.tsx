import React, { FC } from 'react'
import { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from 'src/component/molecules/header'
import { AuthProvider } from 'src/context/auth'
import Footer from 'src/component/molecules/footer'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])
  return (
    <AuthProvider>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  )
}

export default CustomApp
