import { Box, Button, TextField } from '@material-ui/core'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const Post: React.FC = () => {
  const [postValue, setPostValue] = useState({ text: '' })
  const [posted, setPosted] = useState<string[]>([])
  const handleSubmit = () => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 投稿されたリストの管理
    setPosted([...posted, postValue.text])

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
    <Box display="grid" onSubmit={handleSubmit()}>
      <Box>
        投稿する
        <form>
          <TextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={postValue.text}
            onChange={handleChange()}
            variant="filled"
          />
          <Button type="submit">送信</Button>
        </form>
      </Box>
      <Box>
        <ul>
          {posted.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
      </Box>
    </Box>
  )
}

export default Post
