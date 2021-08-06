import { User } from '@firebase/auth-types'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import { auth } from 'src/fixtures'

type AuthProps = {
  user: User | null
}

export const AuthContext = React.createContext<AuthProps>({
  user: null,
})

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  })
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
