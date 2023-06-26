"use client"
import React, { Suspense, useState } from "react";
import { NavbarClient } from "../navbar/Navbar";
import { SidebarAdmin, SidebarClient } from "../sidebar/Sidebar";
import styles from "./layout.module.css";
import LoadingComponent from "../loading/LoadingComponent";

export function LayoutClient({children, user}) {
    const [loading, setLoading] = useState(false)

    return (
        <main className={styles.layout}>
            <div>
                <NavbarClient user={user} />
                <section className={styles.layout__container}>
                    <aside className={styles.sidebar}>
                        <SidebarClient />
                    </aside>
                    <section className={styles.content}>
                        {children}
                    </section>
                </section>
            </div>
        </main>
    )
}

export function LayoutAdmin({ children, user }) {
    return (
        <main className={styles.layout}>
            <NavbarClient user={user} />
            <section className={styles.layout__container}>
                <aside className={styles.sidebar}>
                    <SidebarAdmin />
                </aside>
                <section className={styles.content}>
                    {children}
                </section>
            </section>
        </main>
    )
}

export function LayoutAuth({children}) {
    return (
        <main className={styles.login__layout}>
            {children}
        </main>
    )
}