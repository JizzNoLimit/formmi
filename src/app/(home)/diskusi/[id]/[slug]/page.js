import Boarding from "@/components/elements/boarding/Boarding";
import styles from "./style.module.css";
import api from "@/api";
import { notFound } from "next/navigation";
import Diskusi from "./Diskusi";
import Komentar from "./Komentar";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

async function getDiskusiId(id) {
    const diskusi =  await api.get(`/forums/${id}`)
    return diskusi.data
}

async function getKomentar(id) {
    const komentar = await api.get(`/komentar/${id}`)
    return komentar.data
}

async function AuthPage() {
    // await authPageAdmin
    const token = cookies().get('token')?.value
    const user = jwt.decode(token, process.env.SECREATE_KEY)
    
    return user
}

export default async function Page({ params }) {
    const {id, slug} = params

    const diskusi = await getDiskusiId(id)
    const komentar = await getKomentar(id)
    const user = await AuthPage()

    if (diskusi.data.slug !== slug) {
        notFound()
    }

    return (
        <>
            <section className={styles.home__content}>
                <Diskusi diskusi={diskusi} />

                <Komentar komentar={komentar} count={diskusi?.data?.total_komentar} user={user} diskusi_id={id} />
            </section>

            <Boarding />
        </>
    );
}