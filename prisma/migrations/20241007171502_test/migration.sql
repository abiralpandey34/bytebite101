/*
  Warnings:

  - The primary key for the `Answer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `AnswerAttachment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Exam` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ExamAnswers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Question` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `QuestionAttachment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserExamHistory` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "AnswerAttachment" DROP CONSTRAINT "AnswerAttachment_answer_id_fkey";

-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_parent_id_fkey";

-- DropForeignKey
ALTER TABLE "Exam" DROP CONSTRAINT "Exam_category_id_fkey";

-- DropForeignKey
ALTER TABLE "ExamAnswers" DROP CONSTRAINT "ExamAnswers_answer_id_fkey";

-- DropForeignKey
ALTER TABLE "ExamAnswers" DROP CONSTRAINT "ExamAnswers_exam_id_fkey";

-- DropForeignKey
ALTER TABLE "ExamAnswers" DROP CONSTRAINT "ExamAnswers_question_id_fkey";

-- DropForeignKey
ALTER TABLE "ExamAnswers" DROP CONSTRAINT "ExamAnswers_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_exam_id_fkey";

-- DropForeignKey
ALTER TABLE "QuestionAttachment" DROP CONSTRAINT "QuestionAttachment_question_id_fkey";

-- DropForeignKey
ALTER TABLE "UserExamHistory" DROP CONSTRAINT "UserExamHistory_exam_id_fkey";

-- DropForeignKey
ALTER TABLE "UserExamHistory" DROP CONSTRAINT "UserExamHistory_user_id_fkey";

-- AlterTable
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_pkey",
ALTER COLUMN "answer_id" DROP DEFAULT,
ALTER COLUMN "answer_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Answer_pkey" PRIMARY KEY ("answer_id");
DROP SEQUENCE "Answer_answer_id_seq";

-- AlterTable
ALTER TABLE "AnswerAttachment" DROP CONSTRAINT "AnswerAttachment_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "answer_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "AnswerAttachment_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "AnswerAttachment_id_seq";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
ALTER COLUMN "category_id" DROP DEFAULT,
ALTER COLUMN "category_id" SET DATA TYPE TEXT,
ALTER COLUMN "parent_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id");
DROP SEQUENCE "Category_category_id_seq";

-- AlterTable
ALTER TABLE "Exam" DROP CONSTRAINT "Exam_pkey",
ALTER COLUMN "exam_id" DROP DEFAULT,
ALTER COLUMN "exam_id" SET DATA TYPE TEXT,
ALTER COLUMN "category_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Exam_pkey" PRIMARY KEY ("exam_id");
DROP SEQUENCE "Exam_exam_id_seq";

-- AlterTable
ALTER TABLE "ExamAnswers" DROP CONSTRAINT "ExamAnswers_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "exam_id" SET DATA TYPE TEXT,
ALTER COLUMN "question_id" SET DATA TYPE TEXT,
ALTER COLUMN "answer_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ExamAnswers_pkey" PRIMARY KEY ("user_id", "exam_id", "question_id");

-- AlterTable
ALTER TABLE "Question" DROP CONSTRAINT "Question_pkey",
ALTER COLUMN "question_id" DROP DEFAULT,
ALTER COLUMN "question_id" SET DATA TYPE TEXT,
ALTER COLUMN "exam_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Question_pkey" PRIMARY KEY ("question_id");
DROP SEQUENCE "Question_question_id_seq";

-- AlterTable
ALTER TABLE "QuestionAttachment" DROP CONSTRAINT "QuestionAttachment_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "question_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "QuestionAttachment_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "QuestionAttachment_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "user_id" DROP DEFAULT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");
DROP SEQUENCE "User_user_id_seq";

-- AlterTable
ALTER TABLE "UserExamHistory" DROP CONSTRAINT "UserExamHistory_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "exam_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserExamHistory_pkey" PRIMARY KEY ("user_id", "exam_id");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Category"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "Exam"("exam_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionAttachment" ADD CONSTRAINT "QuestionAttachment_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("question_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerAttachment" ADD CONSTRAINT "AnswerAttachment_answer_id_fkey" FOREIGN KEY ("answer_id") REFERENCES "Answer"("answer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAnswers" ADD CONSTRAINT "ExamAnswers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAnswers" ADD CONSTRAINT "ExamAnswers_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "Exam"("exam_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAnswers" ADD CONSTRAINT "ExamAnswers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("question_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAnswers" ADD CONSTRAINT "ExamAnswers_answer_id_fkey" FOREIGN KEY ("answer_id") REFERENCES "Answer"("answer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserExamHistory" ADD CONSTRAINT "UserExamHistory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserExamHistory" ADD CONSTRAINT "UserExamHistory_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "Exam"("exam_id") ON DELETE RESTRICT ON UPDATE CASCADE;
