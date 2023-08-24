// types/course.ts

export interface Course {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  instructorName: string;
  publishedDate: Date;
  category: string;
}

