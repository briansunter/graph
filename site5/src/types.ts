export type Post = {
    coverimage: string;
    title: string;
    description: string;
    publishDate: string;
    updatedDate: string;
    tags: string[];
    content: string;
  };

export interface  SearchPost extends Post {
  wordCount: number;
}