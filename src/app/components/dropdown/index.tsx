export const Dropdown = ()=>{
    return <div className="w-full bg-light-fgWhite">
    <div className="border-b-2 border-gray-300 flex">
        <div className="w-1/3 bg-light-lightTheme">
            <p className="font-bold px-5 text-lg pb-1 pt-8">Blogs</p>
            <p className="text-sm px-5 font-thin text-light-fadeText">Read a new Blog Everyday</p>
        </div>
        <div className="w-2/3 flex flex-row flex-wrap ml-5 pt-6 pb-4 text-light-fadeText">
            <p className="w-1/2 py-2 px-2 hover:text-light-theme hover:cursor-pointer ">Cybersecurity</p>
            <p className="w-1/2 py-2 px-2 hover:text-light-theme hover:cursor-pointer ">Networking-Advanced</p>
            <p className="w-1/2 py-2 px-2 hover:text-light-theme hover:cursor-pointer ">Protocols</p>
            <p className="w-1/2 py-2 px-2 hover:text-light-theme hover:cursor-pointer ">Routing</p>
            <p className="w-1/2 py-2 px-2 hover:text-light-theme hover:cursor-pointer ">Networking Basics</p>
        </div>
    </div>
    
    <div className="border-b-2 border-gray-300 flex">
        <div className="w-1/3 bg-light-lightTheme">
            <p className="font-bold px-5 text-lg pt-8">Roadmap</p>
            <p className="text-sm px-5 font-thin text-light-fadeText">Time To Be Something</p>
        </div>
        <div className="w-2/3 flex flex-row flex-wrap ml-5 pt-6 pb-4 text-light-fadeText">
            <p className="w-1/2 py-2 px-2 hover:text-light-theme hover:cursor-pointer">Cybersecurity</p>
            <p className="w-1/2 py-2 px-2 hover:text-light-theme hover:cursor-pointer">CompTIA</p>
            <p className="w-1/2 py-2 px-2 hover:text-light-theme hover:cursor-pointer">Networking</p>
            <p className="w-1/2 py-2 px-2 hover:text-light-theme hover:cursor-pointer">CCNA</p>
        </div>
    </div>
    
    <div className="border-b-2 border-gray-300 flex">
        <div className="w-1/3 bg-light-lightTheme">
            <p className="font-bold px-5 text-lg pt-8">Technologies</p>
            <p className="text-sm px-5 font-thin text-light-fadeText">Learn by Using</p>
        </div>
        <div className="w-2/3 flex flex-row flex-wrap ml-5 pt-6 pb-4 text-light-fadeText">
            <p className="w-1/2 py-2 px-2 hover:text-light-theme hover:cursor-pointer ">Wireshark</p>
            <p className="w-1/2 py-2 px-2 hover:text-light-theme hover:cursor-pointer ">Packet Tracer</p>
            <p className="w-1/2 py-2 px-2 hover:text-light-theme hover:cursor-pointer ">Github</p>
            <p className="w-1/2 py-2 px-2 hover:text-light-theme hover:cursor-pointer ">Regex</p>
        </div>
    </div>
    </div>

}