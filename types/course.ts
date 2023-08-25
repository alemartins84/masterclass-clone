// types/course.ts

export interface Course {
  _id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  instructorName: string;
  publishedDate: Date;
  category: string;
}

