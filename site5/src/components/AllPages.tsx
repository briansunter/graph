import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSort, faSortDown, faSortUp} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useMemo, useRef, useTransition } from 'react';
import Fuse from 'fuse.js';
import fuzzysort from 'fuzzysort'
import uFuzzy from '@leeoniya/ufuzzy'
import { useReactTable, ColumnDef, flexRender, RowModel, Table, getCoreRowModel,  SortingState, getSortedRowModel
} from '@tanstack/react-table';
import { SearchPost, Post } from '../types';

interface Props {
  allPosts: SearchPost[]
} 
const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
}; 
const Search: React.FC<Props> = ({allPosts}): JSX.Element => {
  const isBrowser = typeof window !== 'undefined';
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<SearchPost[]>([]);
  const [sorting, setSorting] = React.useState<SortingState>([{ id: 'date', desc: false}])
  const columns = useMemo<ColumnDef<SearchPost>[]>(() => [
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
          asc: <FontAwesomeIcon icon={faSortUp} />,
          desc: <FontAwesomeIcon icon={faSortDown} />,
        }[headerInfo.column.getIsSorted() as string] ?? <FontAwesomeIcon icon={faSort} />}
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
      accessorKey: 'date',
      cell: info => <p className="text-sm text-gray-500">Published: {info.getValue() as string}</p>,
    },
    {
      header: 'Updated Date',
      accessorKey: 'updatedDate',
      cell: info => <p className="text-sm text-gray-500">Updated: {info.getValue() as string}</p>,
    },
    {
      header: 'Word Count',
      accessorKey: 'wordCount',
      cell: info => {
        const post = info.row.original;
        const wordCount = post.wordCount;
        return <p>{wordCount}</p>;
      },
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

  const resultsOrDefault = isBrowser ? results : allPosts.slice(0, 10);

  const table = useReactTable({
    data: resultsOrDefault,
    columns,
    getSortedRowModel: getSortedRowModel<SearchPost>(),
    getCoreRowModel: getCoreRowModel<SearchPost>(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(new URL('./searchWorker.ts', import.meta.url), { type: 'module' });
  
    const worker = workerRef.current;
    worker.onmessage = (event) => {
      startTransition(() => {
      setResults(event.data);
      });
    };
  
    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  const debouncedPostMessage = debounce((worker: Worker, search: string) => {
    worker.postMessage({ search });
  }, 300);
  


  useEffect(() => {
    const worker = workerRef.current;
    if (!worker) return;
    debouncedPostMessage(worker, search);
 
  }, [search]); 

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
                  {flexRender(header.column.columnDef.header, header.getContext()) as JSX.Element}
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
                  {flexRender(cell.column.columnDef.cell, cell.getContext()) as JSX.Element}
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