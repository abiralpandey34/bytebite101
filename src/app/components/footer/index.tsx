import { FaDiscord, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";



export const Footer = ()=>{
    return <div className="w-full bg-black">
        <div className="w-4/5 mx-auto flex-col items-center sm:flex-row flex pt-8">
            <div>
                <img src="https://bytebite101.com/wp-content/uploads/2024/09/Asset-4.png" alt="" className="w-40"/>
            </div>
            <div className="flex sm:ml-auto sm:mr-20 gap-3 mt-5 sm:mt-3 self-">
                <FaFacebookF className="text-white size-6 hover:cursor-pointer hover:text-blue-500" />
                <FaInstagram className="text-white size-7 hover:cursor-pointer hover:text-red-500" />
                <FaLinkedinIn className="text-white size-7 hover:cursor-pointer hover:text-sky-500" />
                <FaYoutube className="text-white size-7 hover:cursor-pointer hover:text-rose-600" />
                <FaDiscord className="text-white size-7 hover:cursor-pointer hover:text-indigo-500" />
            </div>
        </div>
        <div className="w-4/5 mx-auto text-sm text-light-fadeText py-4 text-center sm:text-left">
            <FaRegCopyright className="inline-block" /> <span>ByteBite, Inc. All Rights Reserved</span>
        </div>
    </div>
}