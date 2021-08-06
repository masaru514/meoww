import { Box, Button } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, useContext } from 'react'
import { AuthContext } from 'src/context/auth'
import { useSignIn } from 'src/fixtures'

const Header: FC = () => {
  const router = useRouter()
  const { user } = useContext(AuthContext)
  const { handleGoogleLogin } = useSignIn()

  return (
    <Box display="flex" justifyContent="space-between">
      <h1>[サービス名]</h1>
      <Button onClick={() => handleGoogleLogin()}>ログインする</Button>
      {user ? (
        <img src={user.photoURL || undefined} width={50} height={50} />
      ) : (
        <img src="https://placehold.jp/50x50.png" width={50} height={50} />
      )}
      <Link href={router.pathname === '/' ? '/mypage' : '/'}>next page</Link>
    </Box>
  )
}

export default Header
