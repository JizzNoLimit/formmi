import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { LayoutClient } from "@/components/layout/Layout";

async function AuthPage() {
    const token = cookies().get('token')?.value
    const user = jwt.decode(token, process.env.SECREATE_KEY)

    return user
}

export default async function Layout({children}) {
    const user = await AuthPage()

    return (
        <LayoutClient user={user}>
            {children}
        </LayoutClient>
    );
}