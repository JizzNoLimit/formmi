'use client'

import React from "react";
import { usePathname, useRouter } from 'next/navigation'
import styles from './sidebar.module.css'
import Image from 'next/image'
import { MENU_LIST, MENU_LIST_ADMIN } from "../constans";

export function SidebarClient() {

    const pathname = usePathname()
    const router = useRouter()

    const handleNavigations = (path) => {
        router.push(path)
    }
    
    return (
        <nav className={styles.sidebar__nav}>
            <h4>Menu</h4>
                {MENU_LIST.map((menu, index) => (
                    pathname.length < 2 ? (
                        <button
                            key={index}
                            onClick={() => handleNavigations(menu.path)}
                            className={pathname === menu.path ? styles.active : ''}
                        >
                            <Image src={menu.icon} height={20} width={20} alt='menu-icon' />
                            <span className={styles.sidebar__nav_title}>{menu.name}</span>
                        </button>
                    ) : (
                        <button 
                            key={index}
                            onClick={() => handleNavigations(menu.path)}
                                className={menu.path.length > 2 && pathname.slice(0, menu.path.length) === menu.path ?  styles.active : ''}
                        >
                            <Image src={menu.icon} height={20} width={20} alt='menu-icon'/>
                            <span className={styles.sidebar__nav_title}>{menu.name}</span>
                        </button>
                    )
                ))}
        </nav>
    )
}

export function SidebarAdmin() {

    const pathname = usePathname()
    const router = useRouter()

    const handleNavigations = (path) => {
        router.push(path)
    }

    return (
        <nav className={styles.sidebar__nav}>
            <h4>Menu</h4>
            {MENU_LIST_ADMIN.map((menu, index) => {
                return (
                    <button 
                        key={index}
                        onClick={() => handleNavigations(menu.path)}
                        className={pathname === menu.path ?  styles.active : ''}
                    >
                        <Image src={menu.icon} height={20} width={20} alt='menu-icon'/>
                        <span>{menu.name}</span>
                    </button>
                )
            })}
        </nav>
    )   
}