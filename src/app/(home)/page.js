import styles from "./Home.module.css"
import api from "@/api"
import Boarding from "@/components/elements/boarding/Boarding"
import DiskusiList from "@/components/elements/diskusiList/DiskusiList"
import Link from "next/link"

async function getData(page, limit) {
    if (!page || !limit) { 
        page = 1
        limit = 10
    }
    const forums = await api.get(`/forums?page=${page}&limit=${limit}`)
    return forums.data
}

export default async function Page({ searchParams }) {
    const { page, limit } = searchParams
    const data = await getData(parseInt(page, limit))

    return (
        <>
            <section className={styles.home__content}>
                <header className={styles.home__content_header}>
                    
                </header>
                
                <DiskusiList diskusi={data.data} metadata={data.metadata} />

            </section>
            
            <Boarding />
        </>
    )
}