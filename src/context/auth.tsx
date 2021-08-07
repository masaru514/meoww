import { User } from '@firebase/auth-types'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import { auth } from 'src/fixtures'

type AuthProps = {
  user: User | null
  isAuthChecked: boolean
}

export const AuthContext = React.createContext<AuthProps>({
  user: null,
  isAuthChecked: false,
})

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthChecked, setIsAuthChecked] = useState(false)

  useEffect(() => {
    if (user) return
    console.warn('no user...')
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.warn('set user...')
        setUser(user)
      } else {
        setUser(null)
      }
      setIsAuthChecked(true)
    })
  })
  return (
    <AuthContext.Provider value={{ user, isAuthChecked }}>
      {children}
    </AuthContext.Provider>
  )
}
