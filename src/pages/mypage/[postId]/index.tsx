import { useRouter } from 'next/router'
import React, { FC } from 'react'
import Contents from 'src/component/molecules/Contents'

const PostDetails: FC = () => {
  const router = useRouter()
  const { postId } = router.query
  return <Contents>{postId}</Contents>
}

export default PostDetails
