import { QuizCard, QuizCategoryItemCard } from "../card/quizcard"


export const QuizCategorySection = (categories:any)=>{

    const temp = categories.category
    

    return <div className="mx-auto py-5 flex flex-col">
        {/* <div className="mx-auto px-16 py-2 mb-5 bg-white rounded-lg drop-shadow-xl text-xl">Category</div> */}
        <div className="font-semibold text-xl ml-2">Category</div>
        <div className="border-b-gray-500 flex gap-3 flex-wrap py-5 justify-evenly">

            {temp.map((category: any) => (
                <QuizCategoryItemCard
                id={category.category_id}
                title={category.name} 
                url={category.image_url}
                />
            ))}

        </div>
        <hr className="mt-4"/>
    </div>
}