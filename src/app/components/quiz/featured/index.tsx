import { GoDotFill } from "react-icons/go"
import { HomeQuizCard } from "../card/quizcard"


export const FeaturedQuizSection = ()=>{

    return (
        <div>
            <h3 className="text-2xl font-semibold mb-3 ml-2">Games & Quizzes</h3>
            <div className="flex">
                <HomeQuizCard title="Computer Networking" url="https://www.garlandtechnology.com/hubfs/Website/Blog/Network-diagram.jpg" />
                <HomeQuizCard title="Computer Networking" url="https://www.garlandtechnology.com/hubfs/Website/Blog/Network-diagram.jpg" />
            </div>
        </div>
    )
}

export const FeaturedQuizSideCard = ()=>{
    return (
        <div className="w-full flex flex-row bg-light-fgWhite p-4 border-b-light-fadeText hover:cursor-pointer">
        <img src="https://www.garlandtechnology.com/hubfs/Website/Blog/Network-diagram.jpg" alt="" className="w-2/5 h-16 object-cover"/>
        <div className="ml-4 flex flex-col w-3/5">
            <h2 className="font-bold text-sm">Cybersecurity</h2>
            <div className="mt-auto text-light-fadeText text-sm">
                <span></span> <GoDotFill className="text-light-theme inline-block"/>  <span>s min</span>
            </div>
        </div>
    </div>
    )
}