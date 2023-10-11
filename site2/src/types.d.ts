export interface PostData  {
    title: string;
    description: string;
}
export interface Post {
    content: string;
    data: PostData;
    url: string;
    date: Date;
}