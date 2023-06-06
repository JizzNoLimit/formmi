"use client"
import styles from "./Home.module.css"
import DashboardList from "@/components/elements/diskusiList/DiskusiList"
import api from "@/api"

export default function Page() {
    return (
    <>
        <section className={styles.home__content}>
            <header className={styles.home__content_header}>
                
            </header>
            
            <DashboardList />
        </section>
        <section className={styles.boarding}>
            <h1>Hello world</h1>
        </section>
    </>
    )
}