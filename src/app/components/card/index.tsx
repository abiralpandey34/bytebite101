'use client'
import { getFeaturedImageFromBlog } from "@/services/contentful"
import { redirect, useRouter } from 'next/navigation'


export const Card = (data:any) => {

    const router = useRouter()

    const onClick = () => {
        router.push(`/blog/${data.fields.slug}`)
    }

    return <div onClick={onClick} className="hover:cursor-pointer w-96 flex flex-col mt-5 p-4 bg-light-fg text-light-bg min-h-full justify-between rounded-md drop-shadow-lg">
        <img src={getFeaturedImageFromBlog(data.fields)} alt="OSPF" />
        <ul className="list-disc marker:text-light-theme text-xs flex uppercase mt-2 font-bold">
            <li className="ml-4">Networking</li>
            <li className="ml-8">Routing Protocols</li>
        </ul>

        <h3 className="font-bold mt-3">{data.fields.title}</h3>
        <p className="text-light-fadeText text-sm mt-4">{data.fields.shortDescription}</p>

        <div className="flex flex-row mt-5 text-light-fadeText">
            <span className="w-1/2">{data.fields.publishedDate}</span>
            <span className="w-1/2 flex justify-end"><span>{data.fields.timeToRead || 'NaN'}</span></span>
        </div>
    </div>
}