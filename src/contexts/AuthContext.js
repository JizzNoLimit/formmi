"use client"

import Cookies from "js-cookie";
import React, { createContext, useContext, useReducer } from "react";

// Context
export const AuthContext = createContext()

export function useAuthContext() {
    return useContext(AuthContext)
}

// Inisiasi state
const initialState = {
    isAuthenticated: false,
    user: null,
    token: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "AUTH":
            if (!action.payload.token) {
                return {
                    ...state,
                    isAuthenticated: false,
                    user: null,
                    token: null
                }
            }
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.data,
                token: action.payload.token
            }
        case "LOGIN":
            localStorage.setItem('user', JSON.stringify(action.payload.data))
            Cookies.set('token', action.payload.token, { expires: 7, path: '/' })
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.data,
                token: action.payload.token
            }
        case "LOGOUT":
            localStorage.clear()
            Cookies.remove()
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null
            }
        default:
            return state
    }
}

export default function AuthProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const authContextValue = [state, dispatch]
    
    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}