import { Box, makeStyles } from '@material-ui/core'
import React, { FC } from 'react'

const useStyles = makeStyles({
  footer: {
    background: '#333',
    minHeight: 100,
  },
  footerText: {
    color: '#fff',
    maxWidth: 1000,
    margin: '0 auto',
  },
})

const Footer: FC = () => {
  const classes = useStyles()

  return (
    <Box component="footer" className={classes.footer}>
      <Box className={classes.footerText}>ふったー</Box>
    </Box>
  )
}

export default Footer
