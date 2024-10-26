import { MdKeyboardArrowUp } from "react-icons/md";
import { Dropdown } from "../dropdown";
import { useEffect, useState } from "react";

import { usePathname, useSearchParams } from 'next/navigation'
import Link from "next/link";

const tabs = [
    {
        name: "Blog",
        path: "/",
    },
    {
        name: "Quiz",
        path: "/quiz",
    },
    {
        name: "Cheatsheet",
        path: "/cheat-sheet",
    },
    {
        name: "Video",
        path: "/video-tuts",
    },
    {
        name: "Roadmap",
        path: "/roadmap",
    }
]

export const Menubar = ()=>{
    const [activeTab, setActiveTab] = useState("Blog");
    const [pathname, setPathname] = useState(usePathname());
    useEffect(()=>{
        if(pathname==="/"){
            setActiveTab("Blog");
        }
        else{
            setActiveTab("Roadmap");
        }
    },[usePathname()])  

    const [dropdownVisible, setDropdownVisible] = useState(false);

    return <nav className="bg-light-fgWhite text-light-bg mb-4">
        <div className="w-11/12 sm:w-4/5 mx-auto relative right-3 px-5 pt-2 flex flex-row">
            <div className="w-4/5 flex flex-row">
                {
                    tabs.map((tab)=>(
                        <Link href={tab.path} key={tab.name} className={`self-auto px-3 py-2 border-transparent border-4 hover:font-bold hover:cursor-pointer ${activeTab===tab.name && 'border-b-light-theme'}`}>{tab.name}</Link>
                    ))
                }
            </div>
            <div className="w-1/5  sm:flex-row-reverse items-center hidden sm:flex" onMouseEnter={() => setDropdownVisible(true)} onMouseLeave={() => setDropdownVisible(false)}>
                <div className="hover:cursor-pointer"><span>Explore</span><MdKeyboardArrowUp className={`ml-1 md:mb-1 size-6 inline-block transform transition-transform duration-300 ${dropdownVisible ? 'rotate-180' : ''}`}/> </div>
            </div>
        </div> 
        {dropdownVisible && (<div className="absolute left-2/4">
                <Dropdown />
              </div> )}
    </nav>
}