"use client"

import { useAuthContext } from "@/contexts/AuthContext";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function Authenticated() {
    const [, dispatch] = useAuthContext()
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        const token = Cookies.get('token')
        setDispatch(user, token)
    }, [])

    function setDispatch(user, token) {
        dispatch({
            type: 'AUTH',
            payload: {
                data: user,
                token: token
            }
        })
    }

    return
}