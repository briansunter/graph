import React, { useState, useEffect } from 'preact/compat';
import Fuse from 'fuse.js';

type PostData = {
}
export type Post = {
    coverimage: string;
  title: string;
  description: string;
  publishDate: string;
  updatedDate: string;
  tags: string[];
  content: string;
};

interface Props {
    allPosts: Post[]
}

const Search: React.FC<Props> = ({allPosts}) => {
  const isBrowser = typeof window !== 'undefined';
  const [searchData, setSearchData] = useState<Post[]>(allPosts);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Post[]>([]);

  const topPosts = searchData.slice(0, 10);


  useEffect(() => {
    const fuse = new Fuse(allPosts, { keys: [{name: 'title', weight: 3},{name:  'description', weight: 2}, {name: 'tags', weight: 3}, {name: 'content', weight: 1}], threshold: 0.4, useExtendedSearch: true, distance: 10000,});
    if (search !== '') {
      setResults(fuse.search(search).map(({ item }) => item));
    } else {
      setResults(topPosts);
    }
  }, [search]);

  let serverOrClientResults
  if (isBrowser) {
    serverOrClientResults = results
  } else {
    serverOrClientResults = topPosts;
  }

  return (
    <div className="p-4">
      <input
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch((e.target as HTMLInputElement).value)}
      />
      {serverOrClientResults.map((post, index) => (
        <div key={index} className="mb-4">
          <img src={post.coverimage} alt={post.title} className="mb-2" />
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="mb-2">{post.description}</p>
          <p className="text-sm text-gray-500">
            Published: {post.publishDate} | Updated: {post.updatedDate}
          </p>
          <div className="flex flex-wrap">
            {post.tags?.map((tag, index) => (
              <span key={index} className="mr-2 text-sm text-gray-700">
                #{tag}
              </span>
            ))}
          </div>
          {/* <p>{post.content}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Search;