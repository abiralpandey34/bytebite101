
import { IoIosSearch } from "react-icons/io";

export const Navbar = ()=>{
    return <nav className="bg-black">
        <div className="w-11/12 sm:w-4/5 mx-auto px-4 py-2 flex flex-row">
            <div className="w-2/5 md:w-1/5 flex flex-col justify-center">
                <img src="https://bytebite101.com/wp-content/uploads/2024/09/Asset-4.png" alt="bytebite Logo" className="w-40"/>
                <div className="md:inline-block py-1 md:text-xs lg:text-base md:text-nowrap text-white hidden">Cutting The Complexity</div>
            </div>
            <div className="w-4/5 flex flex-row-reverse items-center">
                <IoIosSearch className="mb-2 mt-2 ml-2 size-6 text-white"/>
                <button className="px-4 py-1 text-black bg-white border-2 border-transparent rounded-md hover:text-white hover:bg-black hover:border-white hover:border-2 transition duration-200"> Subscribe </button>
            </div>
        </div>
        
    </nav>
}