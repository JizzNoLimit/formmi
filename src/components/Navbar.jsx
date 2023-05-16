import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export function NavbarClient() {
    const router = useRouter()
    return (
        <nav className={styles.navbar}>
            <section>
                <Link href={'/'}>
                    <strong>Formmi</strong> Polsri
                </Link>
            </section>
            <section className={styles.search}>
                <input 
                    type="search" 
                    name="" 
                    id=""
                    className={styles.search_input}
                />
                <span>
                    <Image src='/icons/search-icon.svg' width={18} height={18}  alt="icons" />
                </span>
            </section>
            <section>
                <div className={`${styles.auth} login`}>
                    <button
                        onClick={() => router.push('/auth/login')}
                        className={`${styles.auth__login} btn`}
                    >
                        Masuk
                    </button>
                    <button
                        onClick={() => router.push('/auth/register')}
                        className={`${styles.auth__signin} btn`}
                    >
                        Daftar
                    </button>
                </div>
                <div className={styles.user}>

                </div>
            </section>
        </nav>
    )
}