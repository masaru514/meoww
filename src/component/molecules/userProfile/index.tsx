import { Box, Button, Fade, Popover, Typography } from '@material-ui/core'
import React, { FC, useContext, useState } from 'react'
import { AuthContext } from 'src/context/auth'
import { useSignIn } from 'src/fixtures'

const UserProfile: FC = () => {
  const { user, isAuthChecked } = useContext(AuthContext)
  const { handleGoogleLogin, handleGoogleLogout } = useSignIn()
  const [el, setEl] = useState<(EventTarget & Element) | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setEl(event.currentTarget)
  }
  const logout = () => {
    handleGoogleLogout()
    setEl(null)
  }
  const open = Boolean(el)
  return (
    <Fade in={isAuthChecked}>
      <Box>
        {user ? (
          <Box>
            <img
              src={user.photoURL || undefined}
              width={50}
              height={50}
              onClick={handleClick}
            />
            <Popover
              open={open}
              onClose={() => setEl(null)}
              anchorEl={el}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography onClick={logout}>ログアウト</Typography>
            </Popover>
          </Box>
        ) : (
          <Button onClick={() => handleGoogleLogin()}>ログインする</Button>
        )}
      </Box>
    </Fade>
  )
}

export default UserProfile
