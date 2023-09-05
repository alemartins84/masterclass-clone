// sharedTypes.ts
export type Category = {
  _id: string;
  title: string;
  description: string;
  icon?: {
    asset: {
      url: string;
    };
  };
};

export type LessonMeta = {
  title: string;
  duration?: string;
  image?: {
    asset: {
      url: string;
    };
  };
};

export type Lesson = {
  meta: LessonMeta;
  description: string;
  videoUrl: string;
};

export type Course = {
  _id: string;
  slug: any;
  image?: any;
  title: string;
  description: string;
  instructor: string;
  lessons: Lesson[];
};
