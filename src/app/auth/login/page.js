'use client'

import React, { useState } from "react";
import styles from "./login.module.css"
import Input from "@/components/elements/inputs/Inputs";
import Link from "next/link";

export default function Page() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const INPUTS = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "example@gmail.com",
            label: "Email",
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Masukan password anda...",
            label: "Password",
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return (
        <main className={styles.login}>
                <div className={styles.login__container}>
                    <section className={styles.login__header}>
                        <span>Masuk ke Formmi</span>
                    </section>
                    <section className={styles.login__form}>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            {INPUTS.map((input, index) => (
                                <Input 
                                    key={index} 
                                    {...input} value={values[input.name]} 
                                    onChange={onChange}
                                />
                            ))}
                            <button className="btn-login">Masuk</button>
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