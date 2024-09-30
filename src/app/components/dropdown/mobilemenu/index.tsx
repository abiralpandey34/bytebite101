export const MobileMenu = ()=>{
    return <div className="w-full bg-light-fgWhite flex flex-col">
        <div className="flex flex-col pb-5">
            <div className="bg-light-lightTheme px-3 py-2 font-bold text-light-dark">Blogs</div>
            <div className="flex flex-wrap">
                <p className="w-1/2 px-3 py-2 text-sm ">Protocols</p>
                <p className="w-1/2 px-3 py-2 text-sm ">Advanced Networking</p>
                <p className="w-1/2 px-3 py-2 text-sm ">Networking</p>
                <p className="w-1/2 px-3 py-2 text-sm ">Category</p>
                <p className="w-1/2 px-3 py-2 text-sm ">Networking Basics</p>
            </div>
        </div>
        <div className="flex flex-col pb-5">
            <div className="bg-light-lightTheme px-3 py-2 font-bold text-light-dark">Roadmap</div>
            <div className="flex flex-wrap">
                <p className="w-1/2 px-3 py-2 text-sm ">Protocols</p>
                <p className="w-1/2 px-3 py-2 text-sm ">Cybersecurity</p>
                <p className="w-1/2 px-3 py-2 text-sm ">CompTIA</p>
                <p className="w-1/2 px-3 py-2 text-sm ">CCNA</p>
            </div>
        </div>
        <div className="flex flex-col pb-5">
            <div className="bg-light-lightTheme px-3 py-2 font-bold text-light-dark">Technologies</div>
            <div className="flex flex-wrap">
                <p className="w-1/2 px-3 py-2 text-sm ">Wireshark</p>
                <p className="w-1/2 px-3 py-2 text-sm ">Packet Tracer</p>
                <p className="w-1/2 px-3 py-2 text-sm ">Github</p>
                <p className="w-1/2 px-3 py-2 text-sm ">Regex</p>
            </div>
        </div>
    </div>
}