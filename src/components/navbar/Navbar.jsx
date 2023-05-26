import React from "react";
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
                <form action="">
                    <input 
                        type="search" 
                        name="" 
                        id=""
                        className={styles.search_input}
                    />
                </form>
                <span>
                    <Image src='/icons/search-icon.svg' width={18} height={18}  alt="icons" />
                </span>
            </section>
            <section>
                <div className={`${styles.auth} d-none`}>
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
                <div className={`${styles.profile__nav}`}>
                    <div className={styles.profile__nav_notif}>
                        <Image src="/icons/lonceng-icon.svg" width={22} height={22} alt="notif icon" />
                    </div>
                    <div className={`${styles.profile__nav_user} btn`}>
                        <div className={styles.profile__nav_user_img}>
                            <Image src="/icons/user-icon.svg" width={30} height={30} alt="user picture" />
                        </div>
                        <div className={styles.profile__nav_user_username}>
                            <h4>jizznolimit</h4>
                            <p className={styles.role}>Mahasiswa</p>
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    )
}