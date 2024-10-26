'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdTimer, MdHardware } from "react-icons/md";


// Not used anywhere
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

// Used in Featured Quiz Section
export const HomeQuizCard = ({url, title}:{url:string, title:string}) => {
    
    return <div className="w-80 mr-4 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-black flex justify-center w-80 h-72">
        <img
          src={url}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="bg-gray-900 p-4 text-center">
        <h1 className="text-lg font-bold text-white">
          {title}
        </h1>
        <p className="text-white mt-2">
          A computer network is a set of computers, sharing resources.
        </p>
      </div>
    </div>
}

// Used in Category Section
export const QuizCard = ({url, title}:{url:string, title:string})=>{
    return <div>
        <div className={`bg-white py-2 rounded-2xl hover:cursor-pointer flex flex-col justify-center w-36 h-36 translate-x-0 duration-300 drop-shadow-md hover:drop-shadow-xl`}>
                <div className="">
                    <img
                    src={url}
                    alt={title}
                    className="w-4/5 mx-auto"
                    />
                </div>
                <h1 className="">{title}</h1>
        </div>
    </div>
}

// Used in the Featured Section of Quiz Homepage
export const QuizCategoryItemCard = ({id, url, title}:{id:string, url:string, title:string}) => {

  const router = useRouter()

  const onClick = ()=>{
    router.push(`/quiz/${id}`)
  }

    return <div onClick={onClick} className="mx-auto bg-white rounded-xl shadow-md hover:cursor-pointer">
    <div className="flex w-48">
      <img src={url} alt={title} className="p-4" />
    </div>
  
    <div className="p-5">
      <h1 className="text-lg font-bold text-blue-600">{title}</h1>
      <p className="text-gray-500">The party starts at nine</p>
    </div>
  </div>
  
}

// Will be Used in the Quiz Page Itself
export const IndividualQuizCard = ({exam_id, exam_name, exam_description, exam_difficulty, image_url, category_id}:{exam_id:string, exam_name:string, exam_description:string, exam_difficulty:string, image_url:string, category_id:string})=>{
    
  const router = useRouter()

  const onClick = ()=>{
    router.push(`/quiz/${category_id}/${exam_id}`);
  }
    
    return <div>
        <div onClick={onClick} className="card w-96 mx-auto bg-white rounded-2xl flex flex-col px-3 transition-colors hover:drop-shadow-xl mt-5 duration-200 border-2 hover:border-green-600 hover:cursor-pointer">
            <div className="flex flex-row">
                <div className="w-1/2"><img src={image_url} alt={exam_name} className='w-20 mt-3'/></div>
                <div className="w-1/2 flex justify-end">
                    <span className='px-2 py-1 bg-slate-100 inline-block self-start mt-2 mr-2 rounded-md text-xs text-gray-500 font-semibold'> {exam_name} </span> 
                    <FaCheckCircle  className='text-green-600 size-6 mt-2' />
                </div>
            </div>
            <h1 className='font-semibold mt-3 text-gray-800'>{exam_name}</h1>
            <div className='text-gray-500 text-sm my-3'>
                <span className=''><MdTimer className='inline-block mb-1'/> <span>{exam_description}</span> </span>
                <span className='ml-2 '><MdHardware className='inline-block mb-1'/> <span>{exam_difficulty}</span></span>
            </div>
        </div>
    </div>
}