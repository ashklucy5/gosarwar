// models/types.ts
export interface BaseDoc {
  _id?: any; // Allows ObjectId (MongoDB default) or string
  slug: string;
  type: 'section' | 'carousel';
  createdAt: Date;
  updatedAt: Date;
}

export interface SectionDoc extends BaseDoc {
  type: 'section';
  data: { [key: string]: any };
}

export interface CarouselDoc extends BaseDoc {
  type: 'carousel';
  category: 'work' | 'team';
  data: {
    title?: string;
    name?: string;
    role?: string;
    link?: string;
    imageUrl?: string; // Made optional to prevent strict assignment errors
    sortOrder: number;
    [key: string]: any;
  };
}

export type ContentDoc = SectionDoc | CarouselDoc;