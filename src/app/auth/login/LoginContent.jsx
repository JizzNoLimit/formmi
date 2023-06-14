"use client"
import React, { useState } from "react";
import Input from "@/components/elements/inputs/Inputs";
import Link from "next/link";
import Image from "next/image";
import api from "@/api";
import { useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";

export default function LoginContent() {

    const INPUTS = [
        {
            id: "email",
            name: "email",
            type: "email",
            placeholder: "example@gmail.com",
            label: "Email",
            htmlFor: "email"
        },
        {
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            htmlFor: "password"
        },
    ]

    const [, dispatch] = useAuthContext()

    
    const initialState = {
        email: '',
        password: '',
        isSubmiting: false,
        errorMessage: null
    }
    
    const [values, setValues] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setValues({
            ...values,
            isSubmiting: true,
            errorMessage: null
        })
        const requestBody = {
            email: values.email,
            password: values.password
        }


        api.post('/auth/login', requestBody)
            .then(res => {
                if (res.data.status === true) {
                    dispatch({
                        type: 'LOGIN',
                        payload: res.data
                    })
                    setLoading(false)
                    res?.data?.data?.role === "admin" ? router.push('/admin/dashboard') : router.refresh()
                } else {
                    setValues({
                        ...values,
                        isSubmiting: false,
                        errorMessage: res.data.message
                    })
                    setLoading(false)
                }
                throw res
            })
            .catch(err => {
                dispatch({
                    ...values,
                    isSubmiting: false,
                    errorMessage: "Ada kesalahan sistem"
                })
                setLoading(false)
            })
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <main className={styles.login}>
            <div className={styles.login__container}>
                <section className={styles.login__header}>
                    <span>
                        <Image src={'/formmi.png'} width={44} height={44} alt="logo-formmi" />
                    </span>
                    <span>Masuk ke Formmi</span>
                </section>
                <section className={styles.login__form}>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {INPUTS.map((input, index) => (
                            <Input
                                key={index}
                                {...input} value={values[input.name]}
                                onChange={handleChange}
                            />
                        ))}
                        <button className="btn-login">{loading ? 'Loading...' : 'Masuk'}</button>
                    </form>
                </section>
                <section className={styles.register}>
                    Baru di Formmi? <Link href="/auth/registrasi"><span className="link">Buat akun sekarang</span></Link>
                </section>
                <section>

                </section>
            </div>
        </main>
    )
}