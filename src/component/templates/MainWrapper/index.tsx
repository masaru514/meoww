import { Box, makeStyles } from '@material-ui/core'
import React, { FC } from 'react'

const useStyles = makeStyles({
  body: {
    margin: '2rem 0',
  },
  bodyWrapper: {
    // background: '#fff',
  },
})

const MainWrapper: FC = ({ children }) => {
  const classes = useStyles()
  return (
    <Box component="main" className={classes.body}>
      <Box className={classes.bodyWrapper}>{children}</Box>
    </Box>
  )
}

export default MainWrapper
