'use client';
import { useUserStore } from '@/app/store';
import { getLoggedInUserDetails, removeAccessToken } from '@/services/api';
import { useEdges } from '@xyflow/react';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";

export const Navbar = ()=>{
    const {user, setUser} = useUserStore();
    const [isLoading, setIsLoading] = useState(true);

    const getUserDetails = async()=>{
        const userDetails = await getLoggedInUserDetails();
        setIsLoading(false);
        if(!userDetails) return;
        setUser(userDetails);
    }

    const logOut = ()=>{
        removeAccessToken();
        setUser(null);
    }

    useEffect(()=>{
        getUserDetails();
    },[])

    return <nav className="bg-black">
        <div className="w-11/12 sm:w-4/5 mx-auto px-4 py-2 flex flex-row">
            <Link href="/" className="w-2/5 md:w-1/5 flex flex-col justify-center hover:cursor-pointer">
                <img src="https://bytebite101.com/wp-content/uploads/2024/09/Asset-4.png" alt="bytebite Logo" className="w-40"/>
                <div className="md:inline-block py-1 md:text-xs lg:text-base md:text-nowrap text-white hidden">Cutting The Complexity</div>
            </Link>

            {  
                !isLoading && 
                    (!user?( <div className="w-4/5 flex flex-row-reverse items-center">
                        <IoIosSearch className="mb-2 mt-2 ml-2 size-6 text-white"/>
                        {/* <button className="px-4 py-1 text-black bg-white border-2 border-transparent rounded-r-md hover:bg-light-theme transition duration-200 font-semibold"> Sign Up </button> */}
                        <Link className="px-4 py-1 text-black bg-white border-2 border-transparent rounded-r-md hover:bg-light-theme transition duration-200 font-semibold" href="/auth/register"> Sign Up </Link>
                        {/* <button className="px-4 py-1 text-white bg-black border-2 rounded-l-md border-r-0 hover:border-light-theme transition duration-200 font-semibold"> Login </button> */}
                        <Link className="px-4 py-1 text-white bg-black border-2 rounded-l-md border-r-0 hover:border-light-theme transition duration-200 font-semibold" href="/auth/login">Login</Link>
                    </div>):
                    <div className="w-4/5 flex flex-row-reverse items-center">
                        <button onClick={logOut} className="px-4 py-1 text-white bg-black border-2 rounded-l-md border-r-0 hover:border-light-theme transition duration-200 font-semibold">Log Out</button>
                    </div>)
                   
                    
            }
            
        </div>
        
    </nav>
}