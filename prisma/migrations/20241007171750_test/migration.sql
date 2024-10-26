/*
  Warnings:

  - Added the required column `image_url` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_avatar` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "image_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Exam" ADD COLUMN     "image_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "user_avatar" TEXT NOT NULL;
