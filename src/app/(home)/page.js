import styles from "./Home.module.css"
import api from "@/api"
import DiskusiList from "@/components/elements/diskusiList/DiskusiList"
import Link from "next/link"

async function getData(page, limit) {
    if (!page) { page = 1 }
    const forums = await api.get(`forums?page=${page}&limit=${limit}`)
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
        <section className={styles.boarding}>
            <h1>Hello world</h1>
            <Link href={{pathname: '/', query: {id: 'ajiz'}}}>hello</Link>
        </section>
    </>
    )
}