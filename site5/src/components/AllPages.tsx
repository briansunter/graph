import React from 'react'
import { DateTime } from 'luxon';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconDefinition, faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useMemo, useRef, useTransition } from 'react';
import Fuse from 'fuse.js';
import fuzzysort from 'fuzzysort'
import uFuzzy from '@leeoniya/ufuzzy'
import {
  useReactTable, ColumnDef, flexRender, RowModel, Table, getCoreRowModel, SortingState, getSortedRowModel, Row
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';

import { Post } from '../types';

export interface ResultPost {
  coverimage: string;
  title: string;
  description: string;
  date: Date;
  lastModified: Date;
  wordCount: number;
  tags: string[];
  url: string;
}

interface Props {
  allPosts: ResultPost[]
}
const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

const SortIcon = (props: FontAwesomeIconProps) => {
  return <div>
    <FontAwesomeIcon className="mx-2 h-4 w-4"  {...props} />
  </div>;
}

const Search: React.FC<Props> = ({ allPosts }): JSX.Element => {
  const initialPosts = allPosts;
  const isBrowser = typeof window !== 'undefined';
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<ResultPost[]>(initialPosts);
  const [sorting, setSorting] = React.useState<SortingState>([{ id: 'date', desc: true }])
  const tableContainerRef = useRef<HTMLDivElement>(null);


  const columns = useMemo<ColumnDef<ResultPost>[]>(() => [
    {
      header: 'Cover Image',
      accessorKey: 'coverimage',
      cell: info =>
        <img className="cellImage" src={info.getValue() as string} alt={info.row.original.title} loading='lazy' />
    },
    {
      header: (headerInfo) => (
        <div
          className='flex flex-row items-center'
          onClick={headerInfo.column.getToggleSortingHandler()}>
          Title
          {
          [headerInfo.column.getIsSorted() as string] ?? <SortIcon icon={faSort} />}
        </div>
      ),
      accessorKey: 'title',
      cell: info => <h2 className="cellTitle">{info.getValue() as string}</h2>,
    },
    {
      size: 1,
      header: 'Description',
      accessorKey: 'description',
      cell: info => <p className="mb-2 text-sm">{info.getValue() as string}</p>
    },
    {
      size: 1,
      header: (headerInfo) => (
        <div
          className='flex flex-row items-center'
          onClick={headerInfo.column.getToggleSortingHandler()} // Add this line
        >
          Published
          {
          [headerInfo.column.getIsSorted() as string] ?? <SortIcon icon={faSort} />}
        </div>
      ),
      accessorKey: 'date',
      cell: info => {
        const date = DateTime.fromJSDate(info.getValue() as Date);
        const formattedDate = date.toFormat('yyyy LLL dd');
        return <p className="text-sm text-gray-500">Published: {formattedDate}</p>;
      },
    },
    {
      header: (headerInfo) => (
        <div
          className='flex flex-row items-center'
          onClick={headerInfo.column.getToggleSortingHandler()} // Add this line
        >
          Updated Date
          {
          [headerInfo.column.getIsSorted() as string] ?? <SortIcon icon={faSort} />}
        </div>
      ),
      accessorKey: 'lastModified',
      cell: info => <p className="text-sm text-gray-500">Updated: {info.getValue() as string}</p>,
    },
    {
      header: (headerInfo) => (
        <div
          className='flex flex-row items-center'
          onClick={headerInfo.column.getToggleSortingHandler()} // Add this line
        >
          Word Count
        </div>
      ),
      accessorKey: 'wordCount',
      cell: info => {
        const post = info.row.original;
        const wordCount = post.wordCount;
        return <p className=''>{wordCount}</p>;
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
        )
      },
    },
  ], []);

  const resultsOrDefault = isBrowser ? results : initialPosts;

  const table = useReactTable({
    data: resultsOrDefault,
    columns,
    getSortedRowModel: getSortedRowModel<ResultPost>(),
    getCoreRowModel: getCoreRowModel<ResultPost>(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });
  const { rows } = table.getRowModel();
  const rowVirtualizer = useVirtualizer({
    getScrollElement: () => tableContainerRef.current,
    count: rows.length,
    estimateSize: React.useCallback(() => 35, []),
    overscan: 50 
  });

  // const { virtualItems: virtualRows, totalSize } = rowVirtualizer;

  const virtualItems = rowVirtualizer.getVirtualItems();

  // const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  // const paddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0) : 0;

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
    if (!search) {
      startTransition(() => {
        setResults(initialPosts);
      });
      return;
    }
    debouncedPostMessage(worker, search);

  }, [search]);

  return (
    <div>
      <input
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch((e.target as HTMLInputElement).value)}
      />
    <div ref={tableContainerRef} className="container">
      <div style={{ height: `${rowVirtualizer.getTotalSize()}px` }}>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'flex flex-row items-center cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {{asc: <SortIcon icon={faSortUp} />,
                          false:           <SortIcon icon={faSort} />,
                            desc: <SortIcon icon={faSortDown} />,
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {rowVirtualizer.getVirtualItems().map((virtualRow, index) => {
              const row = rows[virtualRow.index] as Row<ResultPost>
              return (
                <tr
                  key={row.id}
                  style={{
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${
                      virtualRow.start - index * virtualRow.size
                    }px)`,
                  }}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
};

export default Search;