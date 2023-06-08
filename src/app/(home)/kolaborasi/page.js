import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function AuthPage() {
    const token = cookies().get('token')?.value
    const user = jwt.decode(token, process.env.SECREATE_KEY)
    if (!token) {
        redirect('/auth/login')
    }
    return user
}

export default async function Page() {
    const user = await AuthPage()
    return <h1>Hello, Next.js!</h1>;
}