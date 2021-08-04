import {
  Box,
  Button,
  List,
  ListItem,
  makeStyles,
  TextField,
} from '@material-ui/core'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const useStyles = makeStyles({
  listItem: {
    border: '1px solid #ccc',
    borderRadius: '1rem',
    padding: '2rem',
    marginBottom: '2rem',
  },
  textField: {
    width: 500,
    marginRight: '1rem',
  },
})

const Post: React.FC = () => {
  const classes = useStyles()
  const [postValue, setPostValue] = useState({ text: '' })
  const [posted, setPosted] = useState<string[]>([])
  const isEmpty = postValue.text === ''
  const handleSubmit = () => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 投稿されたリストの管理
    setPosted([postValue.text, ...posted])

    // リセット処理
    setPostValue({
      ...postValue,
      text: '',
    })
    console.warn('get send')
  }

  const handleChange = () => (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setPostValue({
      ...postValue,
      text: e.target.value,
    })
  }
  return (
    <Box display="grid" maxWidth={1000} margin="0 auto">
      <Box>
        <form onSubmit={handleSubmit()}>
          <TextField
            id="filled-multiline-flexible"
            label="投稿する"
            multiline
            maxRows={4}
            value={postValue.text}
            onChange={handleChange()}
            variant="filled"
            className={classes.textField}
          />
          <Button type="submit" variant="outlined" disabled={isEmpty}>
            送信
          </Button>
        </form>
      </Box>
      <Box>
        <List>
          {posted.map((item) => {
            return (
              <ListItem key={item} className={classes.listItem}>
                {item}
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Box>
  )
}

export default Post
