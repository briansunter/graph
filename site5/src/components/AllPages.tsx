import React from 'react'
import { useState, useEffect, useMemo, useRef, useTransition } from 'react';
import Fuse from 'fuse.js';
import fuzzysort from 'fuzzysort'
import uFuzzy from '@leeoniya/ufuzzy'
import { useReactTable, ColumnDef, flexRender, RowModel, Table, getCoreRowModel,  SortingState, getSortedRowModel
} from '@tanstack/react-table';

type Post = {
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

const Search: React.FC<Props> = ({allPosts}): JSX.Element => {
  const isBrowser = typeof window !== 'undefined';
  const [isPending, startTransition] = useTransition();
  const [searchData, setSearchData] = useState<Post[]>(allPosts);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Post[]>([]);
  const [sorting, setSorting] = React.useState<SortingState>([])
  const handleSort = (columnId: string) => {
    const isDesc = sorting.find(d => d.id === columnId)?.desc;
    const newSorting: SortingState = [{ id: columnId, desc: !isDesc }];
    setSorting(newSorting);
  };
  const columns = useMemo<ColumnDef<Post>[]>(() => [
    {
      header: 'Cover Image',
      accessorKey: 'coverimage',
      cell: info => <img src={info.getValue() as string} alt={info.row.original.title} className="mb-2 h-10" />,
    },
    {
      header: (headerInfo) => (
        <div 
        onClick={headerInfo.column.getToggleSortingHandler()} // Add this line
      >
        Title
        {{
          asc: ' 🔼',
          desc: ' 🔽',
        }[headerInfo.column.getIsSorted() as string] ?? null}
      </div>
      ),
      accessorKey: 'title',
      cell: info => <h2 className="text-xl font-bold">{info.getValue() as string}</h2>,
    },
    {
      header: 'Description',
      accessorKey: 'description',
      cell: info => <p className="mb-2">{info.getValue() as string}</p>,
    },
    {
      header: 'Publish Date',
      accessorKey: 'publishDate',
      cell: info => <p className="text-sm text-gray-500">Published: {info.getValue() as string}</p>,
    },
    {
      header: 'Updated Date',
      accessorKey: 'updatedDate',
      cell: info => <p className="text-sm text-gray-500">Updated: {info.getValue() as string}</p>,
    },
    {
      header: 'Tags',
      accessorKey: 'tags',
      cell: info => {
        const cellInfo = info.getValue() as string[];
        
        return (
        <div className="flex flex-wrap">
          {cellInfo?.map((tag, index) => (
            <span key={index} className="mr-2 text-sm text-gray-700">
              #{tag}
            </span>
          ))}
        </div>
      )},
    },
  ], []);

  const table = useReactTable({
    data: results,
    columns,
    getSortedRowModel: getSortedRowModel<Post>(),
    getCoreRowModel: getCoreRowModel<Post>(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  // useEffect(() => {
  //   fetch('/api/search.json')
  //     .then(response => response.json())
  //     .then(data => setSearchData(data));
  // }, [isBrowser]);

  
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(new URL('./searchWorker.ts', import.meta.url), { type: 'module' });
  
    const worker = workerRef.current;
    worker.onmessage = (event) => {
      // startTransition(() => {
      setResults(event.data);
      // });
    };
  
    return () => {
      workerRef.current?.terminate();
    };
  }, []);
  const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  }; 


  useEffect(() => {
    const worker = workerRef.current;
    if (!worker) return;
  
    worker.postMessage({  search });
  }, [search, searchData]); 

  // useEffect(() => {
  //   if (search !== '') {
  //     const uf = new uFuzzy();
  //     const searchResults = uf.search(searchData.map(p=>p.content), search);
      
  //     // Handle the search results
  //     if (Array.isArray(searchResults)) {
  //       const [haystackIdxs, info, infoIdxOrder] = searchResults;
        
  //       if (haystackIdxs && info && infoIdxOrder) {
  //         // This is a RankedResult
  //         // You can use the info and infoIdxOrder to sort and display your results
  //         const sortedResults = infoIdxOrder.map(idx => {
  //           const post = searchData[haystackIdxs[idx]];
  //           const highlightRanges = info.ranges[idx];
  //           const highlightedPostContent = uFuzzy.highlight(post.content, highlightRanges);
  //           return { ...post, highlightedContent: highlightedPostContent };
  //         });
  //         setResults(sortedResults);
  //       } else if (haystackIdxs) {
  //         // This is a FilteredResult
  //         // You can use the haystackIdxs to display your results
  //         const filteredResults = haystackIdxs.map(idx => searchData[idx]);
  //         setResults(filteredResults);
  //       } else {
  //         // This is an AbortedResult
  //         // You can handle this case as you see fit, for example, by setting results to an empty array
  //         setResults([]);
  //       }
  //     }
  //   } else {
  //     setResults(searchData.slice(0, 10));
  //   }
  // }, [search, searchData]);

  return (
    <div className="p-4">
      <input
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch((e.target as HTMLInputElement).value)}
      />
      <table className="max-h-screen">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;