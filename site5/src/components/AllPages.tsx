import React from 'react'
import { useState, useEffect, useMemo } from 'react';
import Fuse from 'fuse.js';
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
      cell: info => <p className="text-sm text-gray-500">Published: {info.getValue()}</p>,
    },
    {
      header: 'Updated Date',
      accessorKey: 'updatedDate',
      cell: info => <p className="text-sm text-gray-500">Updated: {info.getValue()}</p>,
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

  useEffect(() => {
    fetch('/api/search.json')
      .then(response => response.json())
      .then(data => setSearchData(data));
  }, [isBrowser]);

  useEffect(() => {
    const fuse = new Fuse(searchData, { keys: ['title', 'description', 'tags', 'content'], threshold: 0.4,  distance: 1000,});
    if (search !== '') {
      setResults(fuse.search(search).map(({ item }) => item));
    } else {
      setResults(searchData.slice(0, 10));
    }
  }, [search, searchData]);

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