import { createContext, useContext, useState } from 'react'

const SESSION_KEY = 'portfolio_user'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const stored = sessionStorage.getItem(SESSION_KEY)
        return stored ? JSON.parse(stored) : null
    })

    const login = (credential) => {
        const decoded = JSON.parse(atob(credential.split('.')[1]))
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(decoded))
        setUser(decoded)
    }

    const logout = () => {
        sessionStorage.removeItem(SESSION_KEY)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
