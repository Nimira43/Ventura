import { createContext, useContext, useState, useEffect } from 'react'
import checkAuth from '@/app/actions/checkAuth'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setUseCurrentUser] = useState(null)

  return (
    <AuthContext.Provider 
      value={{
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        setUseCurrentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}