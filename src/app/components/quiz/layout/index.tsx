import { useState } from "react";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { HiViewColumns } from "react-icons/hi2";
import { IoGrid } from "react-icons/io5";
import { QuestionStatus, QuestionStatusIndicator } from "../question-status-card/status-card";



export const QuizLayout = ()=> {
    const [isTwoByTwo, setIsTwoByTwo] = useState(false); // State to toggle between layouts
    
    return <div>


      <div className="w-4/5 flex flex-row mx-auto">
        <div className="w-2/3 rounded-2xl bg-slate-400 mr-6 flex flex-col justify-center p-6">
          <div className="flex justify-end">
            <HiViewColumns className="size-8 text-white" onClick={() => setIsTwoByTwo(false)}/>
            <IoGrid  className="size-7 text-white" onClick={() => setIsTwoByTwo(true)}/>
          </div>
          <h1 className="text-3xl font-bold">THis is a question</h1>
          <div className={`w-full bg-white flex rounded-xl justify-center my-10 p-5 ${isTwoByTwo ? 'flex-wrap' : 'flex-col'}`}>
            <div className={`${isTwoByTwo ? 'w-1/2' : 'w-full'} border-zinc-400 border-2 rounded-lg hover:cursor-pointer my-2 p-3`}>1</div>
            <div className={`${isTwoByTwo ? 'w-1/2' : 'w-full'} border-zinc-400 border-2 rounded-lg hover:cursor-pointer my-2 p-3`}>2</div>
            <div className={`${isTwoByTwo ? 'w-1/2' : 'w-full'} border-zinc-400 border-2 rounded-lg hover:cursor-pointer my-2 p-3`}>3</div>
            <div className={`${isTwoByTwo ? 'w-1/2' : 'w-full'} border-zinc-400 border-2 rounded-lg hover:cursor-pointer my-2 p-3`}>4</div>
          </div>

          <div className="flex flex-row justify-between">
            <button className="py-2 px-8 bg-white hover:bg-green-600 border-2 border-green-600 font-bold text-black hover:text-white rounded-xl transition duration-200">Previous</button>
            <button className="py-2 px-8 bg-white hover:bg-green-600 border-2 border-green-600 font-bold text-black hover:text-white rounded-xl transition duration-200">Next</button>
          </div>
        </div>
      
        <div className="w-1/3 flex flex-col bg-slate-600 p-2 rounded-2xl">
          <div className="h-40 bg-white rounded-2xl">Timer</div>
          {/* <QuestionStatus/> */}
          <QuestionStatusIndicator/>


        </div>

        
      </div>

    </div>
}