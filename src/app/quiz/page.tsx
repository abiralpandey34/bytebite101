// 'use client';

import { QuizLayout } from '../components/quiz/layout';
import { HomeQuizCard, IndividualQuizCard, QuizCard, QuizCategoryItemCard, QuizExpandingCard } from '../components/quiz/card/quizcard';
import { QuizCategorySection } from '../components/quiz/front-card';


import prisma from '@/lib/db';
import { FeaturedQuizSection, FeaturedQuizSideCard } from '../components/quiz/featured';
// import { useState } from 'react';


export default async function Quiz({ params }: { params: { id: string } }) {

  const categories = await prisma.category.findMany()
  

  return (
    <div className='w-3/5 mx-auto'>

      <div className="flex flex-row justify-between">
        <FeaturedQuizSection />
        <div className='flex flex-col pt-6'>
          <h2 className='font-semibold'>New Quizzes</h2>
          <FeaturedQuizSideCard/>
          <FeaturedQuizSideCard/>
          <FeaturedQuizSideCard/>
          <FeaturedQuizSideCard/>
        </div>
      </div>


      <QuizCategorySection category={categories} />

      {/* <QuizCategoryItemCard url="https://www.garlandtechnology.com/hubfs/Website/Blog/Network-diagram.jpg" title="Computer Networking"  /> */}

      {/* <HomeQuizCard title="Computer Networking" url="https://www.garlandtechnology.com/hubfs/Website/Blog/Network-diagram.jpg" /> */}
      {/* <FeaturedQuizCard title="CompTIA Sec+" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoAxkats3re9t1aA7w9NAgqs6SM1yydft8Q&s"/>  */}








      <div>
      {/* <form id="categoryForm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Category Name</label>
            <input type="text" id="categoryName" name="categoryName" required value={categoryName} onChange={(e) => setCategoryName(e.target.value)} // Update state on input change
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form> */}
      </div>
    </div>
  );
}
