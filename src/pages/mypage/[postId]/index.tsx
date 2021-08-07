import { useRouter } from 'next/router'
import React, { FC } from 'react'
import MainWrapper from 'src/component/templates/MainWrapper'

const PostDetails: FC = () => {
  const router = useRouter()
  const { postId } = router.query
  return <MainWrapper>{postId}</MainWrapper>
}

export default PostDetails
