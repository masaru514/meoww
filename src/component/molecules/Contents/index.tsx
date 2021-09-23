import { Box, makeStyles } from '@material-ui/core'
import React, { FC } from 'react'

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    margin: '4rem auto',
  },
})

const Contents: FC = ({ children }) => {
  const classes = useStyles()
  return <Box className={classes.root}>{children}</Box>
}

export default Contents
