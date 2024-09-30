import { QuizCard } from "../card/quizcard"


export const QuizFrontCard = ()=>{
    return <div className="mx-auto py-5 flex flex-col">
        <div className="mx-auto px-16 py-2 mb-5 bg-white rounded-lg drop-shadow-xl text-xl">Category</div>
        <div className="border-b-gray-500 flex px-10 gap-5 flex-wrap py-5 justify-evenly">
            <QuizCard/>
            <QuizCard/>
            <QuizCard/>
            <QuizCard/>
            <QuizCard/>
            <QuizCard/>
            <QuizCard/>
            <QuizCard/>
            <QuizCard/>
            <QuizCard/>
            
        </div>
        <hr className="mt-4"/>
    </div>
}