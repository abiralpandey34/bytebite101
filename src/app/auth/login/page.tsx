import { LoginForm } from "../../components/auth/login";
import prisma from '@/lib/db';
import { generateAccessToken } from "@/services/auth";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export default function Login(){

    const loginUser = async(data: any)=>{
        'use server'
        const user = await prisma.user.findUnique({
            where:{
                email: data?.email
            }
        })

        const isPwCorrect = await bcrypt.compare(data.password, user?.password_hash || "");
        if(!isPwCorrect) return;
        const token = generateAccessToken({
            id: user?.user_id,
            email: user?.email,
            roles: user?.user_roles,
        })
        cookies().set({
            name: "access_token",
            value: token,
            path: "/",
            httpOnly: true
        })
        return {
            id: user?.user_id,
            email: user?.email,
            roles: user?.user_roles
        }
    }

    return (

    <div>
        <LoginForm loginUser={loginUser}/>
    </div>

    )
}

