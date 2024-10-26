import { IndividualQuizCard } from "@/app/components/quiz/card/quizcard";
import prisma from "@/lib/db";


export default async function QuizDetails({ params }: { params: { id: string } }) {


    const exams = await prisma.exam.findMany({
        where:{
            category_id: params.id,
        }
    })


    if (!exams) {
        return <div>No exam found</div>;
    }

    return (
        <>
            {exams.map((exam: any) => (
                <IndividualQuizCard
                    exam_id={exam.exam_id}
                    exam_name={exam.exam_name}
                    exam_description={exam.exam_description}
                    exam_difficulty={exam.exam_difficulty}
                    image_url={exam.image_url}
                    category_id={exam.category_id}
                />
            ))}
        </>
    );
  }