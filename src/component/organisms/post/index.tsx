import {
  Box,
  Button,
  List,
  ListItem,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'
import Contents from 'src/component/molecules/Contents'
import { AuthContext } from 'src/context/auth'

const useStyles = makeStyles({
  listRoot: {
    border: '1px solid #ccc',
    padding: 0,
  },
  listNothing: {
    color: '#aaa',
  },
  listItem: {
    borderBottom: '1px solid #ccc',
    padding: '2rem',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  textField: {
    width: 500,
    marginRight: '1rem',
  },
  formRoot: {
    display: 'flex',
    alitnItems: 'center',
  },
})

type PostParam = {
  text: string
  date: string
}

const Post: React.FC = () => {
  const classes = useStyles()
  const [postValue, setPostValue] = useState<PostParam>({
    text: '',
    date: '',
  })
  const [posted, setPosted] = useState<PostParam[]>([])
  const { user } = useContext(AuthContext)
  const isEmpty = postValue.text === ''
  const handleSubmit = () => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 投稿されたリストの管理
    setPosted([postValue, ...posted])

    // リセット処理
    setPostValue({
      ...postValue,
      text: '',
    })
  }

  const currentDate = String(new Date())

  const handleChange = () => (e: ChangeEvent<HTMLInputElement>) => {
    setPostValue({
      ...postValue,
      text: e.target.value,
      date: currentDate,
    })
  }
  if (!user) {
    return <Contents>ログインをしてください。</Contents>
  }
  return (
    <Contents>
      <Box>
        <form onSubmit={handleSubmit()} className={classes.formRoot}>
          <TextField
            id="filled-multiline-flexible"
            label="ページタイトルを入力する"
            multiline
            maxRows={4}
            value={postValue.text}
            onChange={handleChange()}
            variant="filled"
            className={classes.textField}
          />
          <Button type="submit" variant="outlined" disabled={isEmpty}>
            作成
          </Button>
        </form>
      </Box>
      <Box mt={6}>
        {posted.length ? (
          <List className={classes.listRoot}>
            {posted.map((item, index) => {
              return (
                <ListItem key={index} className={classes.listItem}>
                  <span>{item.date}</span>
                  {item.text}
                </ListItem>
              )
            })}
          </List>
        ) : (
          <Typography className={classes.listNothing}>
            ページがありません。
          </Typography>
        )}
      </Box>
    </Contents>
  )
}

export default Post
