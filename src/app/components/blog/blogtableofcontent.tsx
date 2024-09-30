import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



export const BlogTableOfContent = (fields:any) => {
    return <div className="w-full mx-auto flex flex-col bg-light-fgWhite py-8 px-6">
        <h2 className="uppercase font-bold text-xs tracking-widest px-3">Contents</h2>
        <ul className="mt-4">
            <li className="border-transparent border-2 hover:border-l-gray-800 pl-2 hover:rounded-sm">Lorem ipsum dolor sit amet.</li>
            <li className="border-transparent border-2 hover:border-l-gray-800 pl-2 hover:rounded-sm">Lorem ipsum dolor sit amet.</li>
            <li className="border-transparent border-2 hover:border-l-gray-800 pl-2 hover:rounded-sm">Lorem ipsum dolor sit amet.</li>
            <li className="border-transparent border-2 hover:border-l-gray-800 pl-2 hover:rounded-sm">Lorem ipsum dolor sit amet.</li>
            <li className="border-transparent border-2 hover:border-l-gray-800 pl-2 hover:rounded-sm">Lorem ipsum dolor sit amet.</li>
        </ul>

        <h2 className="uppercase font-bold text-xs tracking-widest px-2 mt-5">SHARE</h2>
        <div className="flex px-2 mt-2 gap-2">
            <FaFacebook className="cursor-pointer "/>
            <FaXTwitter className="cursor-pointer "/>
            <FaLinkedin className="cursor-pointer "/>
        </div>


    </div>
}