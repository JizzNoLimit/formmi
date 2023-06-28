import DiskusiList from '@/components/elements/diskusiList/DiskusiList';
import styles from './style.module.css'
import Boarding from "@/components/elements/boarding/Boarding";
import api from '@/api';
import Link from 'next/link';

async function getData(page, limit) {
    if (!page || !limit) {
        page = 1
        limit = 10
    }
    const forums = await api.get(`/forums?page=${page}&limit=${limit}`)
    return forums.data
}

export default async function Page({searchParams}) {
    const { page, limit } = searchParams
    const data = await getData(parseInt(page, limit))
    const title = 'Diskusi'
    
    return (
        <>
            <section className={styles.home__content}>

                <div>
                    <div className={styles.diskusi__header}>
                        <div>
                            <h2>Diskusi</h2>
                        </div>
                        <div>
                            <Link href={`/diskusi/buat`}>
                                <button className={styles.diskusi__buatBtn}>Buat Diskusi</button>
                            </Link>
                        </div>
                    </div>  
                    <DiskusiList diskusi={data.data} metadata={data.metadata} title={title} />
                </div>

            </section>

            <Boarding />
        </>
    )
}