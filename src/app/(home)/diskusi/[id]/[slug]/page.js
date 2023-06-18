import Boarding from "@/components/elements/boarding/Boarding";
import styles from "./style.module.css";
import api from "@/api";
import { notFound } from "next/navigation";
import Diskusi from "./Diskusi";

async function getDiskusiId(id) {
    const diskusi =  await api.get(`/forums/${id}`)
    return diskusi.data
}

export default async function Page({ params }) {
    const {id, slug} = params

    const diskusi = await getDiskusiId(id)

    if (diskusi.data.slug !== slug) {
        notFound()
    }

    return (
        <>
            <section className={styles.home__content}>
                <Diskusi diskusi={diskusi} />
            </section>

            <Boarding />
        </>
    );
}