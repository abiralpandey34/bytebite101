'use client';

import { QuizLayout } from '../components/quiz/layout';
import { IndividualQuizCard, QuizCard, QuizExpandingCard } from '../components/quiz/card/quizcard';
import { QuizFrontCard } from '../components/quiz/front-card';

export default function Quiz({ params }: { params: { id: string } }) {


  return (
      
      
    <div className='w-3/5 mx-auto '>

      <QuizFrontCard />


      <div className="w-full flex justify-evenly px-5 flex-wrap">
        
        <IndividualQuizCard/>
        <IndividualQuizCard/>
        <IndividualQuizCard/>
        <IndividualQuizCard/>
        
      </div>
    </div>
  );
}
