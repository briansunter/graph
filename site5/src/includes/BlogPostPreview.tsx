import React from 'preact/compat';

interface BlogPostPreviewProps {
  title: string;
  description: string;
  tags: string[];
  date: Date;
  coverimage: string;
}
export function BlogPostPreview(post:BlogPostPreviewProps) {
  const title = post.title;
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col justify-between">
      <div>
        <img src={post.coverimage} alt={title} className="w-full h-48 object-cover rounded-t-md mb-4" />
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600 mb-2">{post.description}</p>
      </div>
      
      <div>
        <ul className="flex flex-wrap mb-4">
          {post.tags.map((tag: any,index: any) => (
            <li key={index} className="bg-gray-200 rounded px-2 py-1 text-sm mr-2 mb-2">{tag}</li>
          ))}
        </ul>
        <span className="text-sm text-gray-500 mb-0">{post.date}</span>
      </div>
    </div>
  );
}

export default BlogPostPreview;