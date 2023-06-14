import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function AuthPage() {
    // await authPageAdmin
    const token = cookies().get('token')?.value
    const user = jwt.decode(token, process.env.SECREATE_KEY)
    if (!user) {
        redirect('/auth/login')
    }
    return
}

export default async function Page() {
    await AuthPage()

    return <h1>Hello, Next.js!</h1>;
}