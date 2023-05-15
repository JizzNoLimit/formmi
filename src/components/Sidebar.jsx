import { useRouter } from 'next/router'
import styles from './sidebar.module.css'
import Image from 'next/image'
import { MENU_LIST } from './constans'

export function SidebarClient() {

    const router = useRouter()

    return (
        <nav className={styles.sidebar__nav}>
            {MENU_LIST.map((menu, index) => (
                <button 
                    key={index}
                >
                    <Image src={menu.icon} height={19} width={19} alt='menu-icon'/>
                    <span>{menu.name}</span>
                </button>
            ))}
        </nav>
    )
}