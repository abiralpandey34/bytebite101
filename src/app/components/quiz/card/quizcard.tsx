'use client'
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdTimer, MdHardware } from "react-icons/md";

export const QuizExpandingCard = ()=>{
    const[isLarge, setIsLarge] = useState(false);

    return <div>
            <div className={`group flex flex-row w-40 ${isLarge ? 'w-full' : ''} duration-300`} onMouseEnter={() => setIsLarge(true)} onMouseLeave={() => setIsLarge(false)}>
                <div className={`bg-white rounded-2xl group-hover:rounded-tr-none flex flex-col w-40 translate-x-0 duration-300`}>
                <div className="">
                    <img
                    src="https://platri.de/wp-content/uploads/2024/01/Angular-Framework-e1649312852136.png.webp"
                    alt=""
                    className="w-36 p-2"
                    />
                </div>
                <div className="group-hover:rounded-br-none translate-x-0 duration-300 flex items-end bg-green-500 text-white text-xl p-2 w-40 rounded-bl-3xl rounded-br-3xl">
                    Easy
                </div>
                </div>

                {/* Revealed on hover */}
                <div
                className={`bg-white relative flex no-wrap right-3 rounded-tr-3xl rounded-br-3xl text-black translate-x-0 duration-200 ${
                    isLarge ? 'w-40 ml-2 opacity-100' : 'w-0 opacity-0'
                } group-hover:w-40 group-hover:opacity-100`}
                >
                <h2 className="p-2 mx-2 font-bold text-xl">Angular Quiz</h2>
                </div>
            </div>
    </div>
}

export const QuizCard = ()=>{
    return <div>
        <div className={`bg-white rounded-2xl hover:cursor-pointer flex flex-col justify-center w-36 h-36 translate-x-0 duration-300 drop-shadow-md hover:drop-shadow-xl`}>
                <div className="">
                    <img
                    src="https://platri.de/wp-content/uploads/2024/01/Angular-Framework-e1649312852136.png.webp"
                    alt=""
                    className="w-4/5 mx-auto"
                    />
                </div>
        </div>
    </div>
}

export const IndividualQuizCard = ()=>{
    return <div>
        <div className="card w-96 mx-auto bg-white rounded-2xl flex flex-col px-3 transition-colors hover:drop-shadow-xl mt-5 duration-200 border-2 hover:border-green-600 hover:cursor-pointer">
            <div className="flex flex-row">
                <div className="w-1/2"><img src="https://platri.de/wp-content/uploads/2024/01/Angular-Framework-e1649312852136.png.webp" alt="" className='w-20 mt-3'/></div>
                <div className="w-1/2 flex justify-end">
                    <span className='px-2 py-1 bg-slate-100 inline-block self-start mt-2 mr-2 rounded-md text-xs text-gray-500 font-semibold'> Machine Learning </span> 
                    <FaCheckCircle  className='text-green-600 size-6 mt-2' />
                </div>
            </div>
            <h1 className='font-semibold mt-3 text-gray-800'>Introduction To Machine Learning</h1>
            <div className='text-gray-500 text-sm my-3'>
                <span className=''><MdTimer className='inline-block mb-1'/> <span>15 min</span> </span>
                <span className='ml-2 '><MdHardware className='inline-block mb-1'/> <span>Advanced</span></span>
            </div>
        </div>
    </div>
}