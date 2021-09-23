import { auth, firebase } from '../firebase-client'

const provider = new firebase.auth.GoogleAuthProvider()

type SignIn = {
  handleGoogleLogin: () => void
  handleGoogleLogout: () => void
}

export const useSignIn = (): SignIn => {
  const handleGoogleLogin = async () => {
    try {
      const user = await auth.signInWithPopup(provider).catch((err) => {
        throw err
      })
      console.log(user)
    } catch (err) {
      console.error(err)
    }
  }

  const handleGoogleLogout = async () => {
    try {
      await auth.signOut().catch((err) => {
        throw err
      })
    } catch (err) {
      console.error(err)
    }
  }
  return {
    handleGoogleLogin,
    handleGoogleLogout,
  }
}
