import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import FormDiskusi from "./FormDiskusi";
import Boarding from "@/components/elements/boarding/Boarding";
import styles from "./style.module.css";

async function AuthPage() {
    // await authPageAdmin
    const token = cookies().get('token')?.value
    const user = jwt.decode(token, process.env.SECREATE_KEY)
    if (!user) {
        redirect('/auth/login')
    }
    return user
}

export default async function Page() {
    const user = await AuthPage()
    return (
        <>
            <section className={styles.home__content}>        
                <FormDiskusi userId={user.id} />
            </section>
            
            <Boarding />
        </>
    );
}