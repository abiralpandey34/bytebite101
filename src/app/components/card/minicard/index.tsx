'use client';
import { getFeaturedImageFromBlog } from "@/services/contentful";
import { GoDotFill } from "react-icons/go";

import { redirect, useRouter } from 'next/navigation'
import router, { Router } from "next/router";



export const Minicard = (data:any)=> {
    const router = useRouter()

    const onClick = () => {
        // Router.
        // redirect(`/blog/${data.fields.slug}`);
        router.push(`/blog/${data.fields.slug}`)
    }

    return <div onClick={onClick} className="w-full flex flex-row bg-light-fgWhite p-4 border-b-light-fadeText hover:cursor-pointer">
        <img src={getFeaturedImageFromBlog(data.fields)} alt="" className="w-2/5 h-24 object-cover"/>
        <div className="ml-4 flex flex-col w-3/5">
            <h2 className="font-bold text-sm">{data.fields.title}</h2>
            <div className="mt-auto text-light-fadeText text-sm">
                <span></span> <GoDotFill className="text-light-theme inline-block"/>  <span>{data.fields.timeToRead || "NaN"}</span>
            </div>
        </div>
    </div>
}