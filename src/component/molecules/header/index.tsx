import { Box, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import UserProfile from '../userProfile'

const useStyles = makeStyles({
  header: {
    background: '#fff',
    boxShadow: '0 0 2px 2px rgba(0,0,0, 0.3)',
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: 1000,
  },
})

const Header: FC = () => {
  const router = useRouter()
  const classes = useStyles()

  return (
    <Box component="header" className={classes.header}>
      <Box className={classes.headerWrapper}>
        <h1>[サービス名]</h1>
        <Box display="flex" alignItems="center">
          <UserProfile />
          <Box ml={2}>
            <Link href={router.pathname === '/' ? '/mypage' : '/'}>
              {router.pathname === '/' ? 'マイページへ移動' : 'ホーム'}
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
