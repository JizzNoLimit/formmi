'use client'

import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function NavbarClient({user}) {
    const router = useRouter()
    return (
        <nav className={styles.navbar}>
            <section className={styles.navbar__brand}>
                <button className={styles.menu__bars}>
                    <Image src='/icons/bars-icon.svg' width={26} height={26} alt="logo" />
                </button>

                <Link href={'/'}>
                    <span><strong>Formmi</strong> Polsri</span>
                </Link>
            </section>
            <section className={styles.navbar__center}>
                <div className={styles.logo__mobile}>
                    <Image src='/formmi.png' width={30} height={30} alt="logo" />
                </div>
                <div className={styles.search}>
                    <form action="">
                        <input 
                            type="search" 
                            name="search" 
                            id="search"
                            className={styles.search_input}
                        />
                    </form>
                    <span>
                        <Image src='/icons/search-icon.svg' width={18} height={18}  alt="icons" />
                    </span>
                </div>
            </section>
            <section>
                {user ? (
                    <div className={styles.profile__nav}>
                        <div className={styles.profile__nav_notif}>
                            <Image src="/icons/lonceng-icon.svg" width={23} height={23} alt="notif icon" />
                        </div>
                        <div className={`${styles.profile__nav_user}`}>
                            <div className={styles.profile__nav_user_img}>
                                <Image src="/icons/user-icon.svg" width={32} height={32} alt="user picture" />
                            </div>
                            <div className={styles.profile__nav_user_username}>
                                <span>{user?.username}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className={styles.auth}>
                            <button
                                onClick={() => router.push('/auth/login')}
                                className={`${styles.auth__login} btn`}
                            >
                                Masuk
                            </button>
                            <button
                                onClick={() => router.push('/auth/registrasi')}
                                className={`${styles.auth__signin} btn`}
                            >
                                Daftar
                            </button>
                        </div>
                )}
                
            </section>
        </nav>
    )
}