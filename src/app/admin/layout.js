import { NavbarClient } from "@/components/navbar/Navbar";
import { SidebarAdmin } from "@/components/sidebar/Sidebar";
import styles from "./admin.module.css"
import { cookies} from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import { LayoutAdmin } from "@/components/layout/Layout";

async function AuthPage() {
    // await authPageAdmin
    const token = cookies().get('token')?.value
    const user = jwt.decode(token, process.env.SECREATE_KEY)
    if (!token || user?.role !== "admin") {
        redirect('/')
    }
    return user
}

export default async function Layout({children}) {
    const user = await AuthPage()

    return (
        <LayoutAdmin user={user}>
            {children}
        </LayoutAdmin>
    );
}