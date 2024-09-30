'use client';
import { GoDotFill } from "react-icons/go";
import { redirect, useRouter } from 'next/navigation'



export const Frontcard = (data:any)=> {

    const router = useRouter()

    const onClick = () => {
        router.push(`/blog/${data.fields.slug}`)
    }

    return <div onClick={onClick} className="hover:cursor-pointer w-full h-full flex flex-col bg-cyan-950 text-white p-4 py-4 pt-8 md:p-8 md:py-10 md:pt-14 rounded-lg">
        <h2 className="text-2xl sm:text-4xl font-bold min-h-40">{data.fields.title}</h2>
        <p className="sm:mt-8 text-xl leading-20 mb-6">{data.fields.shortDescription}</p>
        <div className="flex flex-row mt-auto">
            <div>
                <span>{data.fields.publishedDate}</span> <GoDotFill className="text-light-theme inline-block"/>  <span>{data.fields.timeToRead}</span>
            </div>
            <div className="ml-auto">
                <span className="uppercase">Networking</span>
            </div>
        </div>
    </div>
}