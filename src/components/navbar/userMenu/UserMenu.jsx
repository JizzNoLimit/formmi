import Image from "next/image";
import styles from "../navbar.module.css";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function UserMenu({username}) {

    const router = useRouter()
    function handleUserMenu() {
        const dropDown = document?.getElementsByClassName(styles.usermenu__dropdown)
        dropDown[0].classList.toggle(styles.open)
    }

    function handleLogout() {
        localStorage.removeItem('user')
        Cookies.remove('token')
        router.refresh()
    }

    return (
        <div className={styles.profile__nav}>
            <div className={styles.profile__nav_notif}>
                <Image src="/icons/lonceng-icon.svg" width={23} height={23} alt="notif icon" />
            </div>
            <div className={`${styles.profile__nav_user}`}>
                <div className={styles.profile__nav_user_img}>
                    <Image src="/icons/user-icon.svg" width={32} height={32} alt="user picture" />
                </div>
                <div 
                    onClick={() => handleUserMenu()}
                    className={styles.profile__nav_user_username}
                >
                    <span>{username}</span>
                </div>

                <div className={styles.usermenu__dropdown}>
                    <Link href='/profile'>
                        <div className={styles.drop__wrapper}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.drop__menu}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <p>Profile</p>
                        </div>
                    </Link>
                    <Link href='/notifikasi'>
                        <div className={styles.drop__wrapper}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.drop__menu}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </div>
                            <p>Notifikasi</p>
                        </div>
                    </Link>
                    <div className={styles.keluar__button}>
                        <button onClick={() => handleLogout()}>Keluar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}