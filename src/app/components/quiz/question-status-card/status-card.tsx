import { FaCheckCircle } from "react-icons/fa"

export const QuestionStatus = ()=>{
    return <div className="bg-red-300 mt-5 rounded-2xl">
    <div className="flex flex-row px-4 py-2 bg-white justify-between my-4 mx-4 rounded-xl font-bold"><span>Question 1</span><FaCheckCircle className="self-start mt-1 size-5 text-green-500" /></div>
    <div className="flex flex-row px-4 py-2 bg-white justify-between my-4 mx-4 rounded-xl font-bold"><span>Question 2</span><FaCheckCircle className="self-start mt-1 size-5 text-green-500" /></div>
    <div className="flex flex-row px-4 py-2 bg-white justify-between my-4 mx-4 rounded-xl font-bold"><span>Question 3</span><FaCheckCircle className="self-start mt-1 size-5 text-green-500" /></div>
    <div className="flex flex-row px-4 py-2 bg-white justify-between my-4 mx-4 rounded-xl font-bold"><span>Question 4</span><FaCheckCircle className="self-start mt-1 size-5 text-green-500" /></div>
  </div>
}

export const QuestionStatusIndicator = ()=>{
    return <div className="bg-red-300 mt-5 rounded-2xl flex flex-col">
      <div>
        <h1>Question 1/8</h1>
      </div>

      <div className="grid grid-cols-3 gap-2 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <span className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full">1</span>
        <span className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full">2</span>
        <span className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full">3</span>
        <span className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full">4</span>
        <span className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full">5</span>
        <span className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full">6</span>
        <span className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full">7</span>
        <span className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full">8</span>
        <span className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full">9</span>
        <span className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full">10</span>
        <span className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full">11</span>
        <span className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full">12</span>
        <span className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full">13</span>
        <span className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full">14</span>
        <span className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full">15</span>
      </div>

  </div>
}