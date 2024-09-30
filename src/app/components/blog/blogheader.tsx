import { getBlogDetails } from "@/services/contentful";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";


export const Blogheader = (fields:any)  => {

    return <div className="md:w-4/5 lg:w-3/5 mx-auto flex flex-col bg-light-fgWhite pt-8 pb-4 px-6 w-11/12">
        <div className="text-light-fadeText text-sm">
            <span className="">Home</span><IoIosArrowForward className="inline-block size-3 ml-2" /><span className="ml-2">Blog</span><IoIosArrowForward className="inline-block size-3 ml-2" /><span className="ml-2">Artificial Intelligence (AI)</span>
        </div>
        <h2 className="text-4xl font-bold mt-4">{fields.blog.title}</h2>
        <p className="mt-3">{fields.blog.shortDescription}</p>
        <div className="flex text-light-fadeText text-sm mt-4">
            <p className="">{fields.blog.publishedDate}</p> <GoDotFill className="text-light-theme inline-block mt-1 mx-3"/>  <span>{fields.blog.timeToRead || 'NaN'}</span>
        </div>
    </div>
}