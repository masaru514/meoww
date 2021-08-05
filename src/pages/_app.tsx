import React, { FC } from 'react'
import { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Box, Button } from '@material-ui/core'
import { useSignIn } from 'src/fixtures'

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
  const { handleGoogleLogin } = useSignIn()
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <h1>[サービス名]</h1>
        <Button onClick={() => handleGoogleLogin()}>ログインする</Button>
      </Box>
      <CssBaseline />
      <Component {...pageProps} />
      <footer>フッターです</footer>
    </>
  )
}

export default CustomApp
