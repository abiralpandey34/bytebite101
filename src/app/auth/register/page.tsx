import { RegisterForm } from "@/app/components/auth/register";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";


export default function Register(){

    const registerUser = async(data:any)=>{
        'use server'
        const pwHash = await bcrypt.hash(data.password, 10);   
        const register = await prisma.user.create({
            data: {
                email: data?.email,
                name: data?.firstName,
                password_hash:pwHash,
                user_avatar:"",
                user_roles: ['client'],
            },
        })

        return register
        
    }


    return (
        <div>
            <RegisterForm registerUser={registerUser}/>
        </div>
    )
}