import { auth, firebase } from '../firebase-client'

const provider = new firebase.auth.GoogleAuthProvider()
auth.signInWithPopup(provider).catch((err) => {
  throw err
})
