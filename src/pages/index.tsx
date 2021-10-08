import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Contents from 'src/component/molecules/Contents'
import { AuthContext } from 'src/context/auth'

const HomePage: React.FC = () => {
  const router = useRouter()
  const { isAuthChecked } = useContext(AuthContext)
  if (isAuthChecked) {
    router.push('/mypage')
  }
  return (
    <>
      <Contents>
        <main>Github Issueみたいなの作ってます。</main>
      </Contents>
    </>
  )
}

export default HomePage
