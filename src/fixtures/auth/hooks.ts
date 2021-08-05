import { auth, firebase } from '../firebase-client'

const provider = new firebase.auth.GoogleAuthProvider()

export const useSignIn = () => {
  const handleGoogleLogin = async () => {
    try {
      await auth.signInWithPopup(provider).catch((err) => {
        throw err
      })
    } catch (err) {
      console.error(err)
    }
  }
  return {
    handleGoogleLogin,
  }
}
