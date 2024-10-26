import { FaDownload } from "react-icons/fa"

export const CheatsheetCard = () =>{
    return <div className="w-1/3 rounded-xl shadow-md overflow-hidden mx-auto">
    <div className="bg-white flex w-full h-full p-2 pb-0">
      <img
        src="https://images.datacamp.com/image/upload/v1719844739/Azure_CLI_Cheat_Sheet_06f68be1bf.png"
        alt="Cheatsheet"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4 text-center bg-slate-700">
        <div className="px-4 py-2 font-semibold flex bg-light-fg rounded-lg w-full justify-between">
            <h1 className="mt-2">Have This PDF at your Fingertips</h1>
            <div className="flex px-4 py-2 border border-cyan-950 hover:cursor-pointer group rounded-md hover:underline">
                <span><FaDownload className="mt-1 mr-3 font-semibold" /></span> <span>Download PDF</span>
            </div>
        </div>
    </div>
  </div>
}