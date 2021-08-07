import { Box, Button, Fade } from '@material-ui/core'
import React, { useContext } from 'react'
import { AuthContext } from 'src/context/auth'
import { useSignIn } from 'src/fixtures'

const UserProfile = () => {
  const { user, isAuthChecked } = useContext(AuthContext)
  const { handleGoogleLogin } = useSignIn()
  return (
    <Fade in={isAuthChecked}>
      <Box>
        {user ? (
          <img src={user.photoURL || undefined} width={50} height={50} />
        ) : (
          <Button onClick={() => handleGoogleLogin()}>ログインする</Button>
        )}
      </Box>
    </Fade>
  )
}

export default UserProfile
