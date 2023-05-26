import React from "react";
import { useRouter } from 'next/router'
import styles from './sidebar.module.css'
import Image from 'next/image'
import { MENU_LIST } from "../constans";

export function SidebarClient() {

    const router = useRouter()

    const handleNavigations = (path) => {
        router.push(path)
    }

    return (
        <nav className={styles.sidebar__nav}>
            <h4>Menu</h4>
            {MENU_LIST.map((menu, index) => (
                <button 
                    key={index}
                    onClick={() => handleNavigations(menu.path)}
                    className={router.pathname === menu.path ? styles.active : ''}
                >
                    <Image src={menu.icon} height={20} width={20} alt='menu-icon'/>
                    <span>{menu.name}</span>
                </button>
            ))}
            <h4>Lainnya</h4>
        </nav>
    )
}