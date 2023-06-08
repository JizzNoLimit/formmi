import React, { Suspense } from "react";
import { NavbarClient } from "../navbar/Navbar";
import { SidebarAdmin, SidebarClient } from "../sidebar/Sidebar";
import Loading from "../loading/Loading";
import styles from "./layout.module.css";

export function LayoutClient({children, user}) {
    return (
        <main className={styles.layout}>
            <NavbarClient user={user} />
            <section className={styles.layout__container}>
                <aside className={styles.sidebar}>
                    <SidebarClient />
                </aside>
                <section className={styles.content}>
                    <Suspense fallback={<Loading />}>
                        {children}
                    </Suspense>
                </section>
            </section>
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
                    <Suspense fallback={<Loading />}>
                        {children}
                    </Suspense>
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