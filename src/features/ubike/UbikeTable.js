import { useState } from 'react';
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table';
import { useUbikeTableContext } from './UbikeTableContext';
import './UbikeTable.css';

const columns = [
  {
    header: () => '縣市',
    accessorKey: 'county',
  },
  {
    header: () => '區域',
    accessorKey: 'area',
  },
  {
    header: () => '站點名稱',
    accessorKey: 'placement',
  },
  {
    header: () => '可借車輛',
    accessorKey: 'avaliableRentCount',
  },
  {
    header: () => '可還空位',
    accessorKey: 'avaliableGiveBackCount',
  },
];

// why emptyArray?
// ref: https://github.com/TanStack/table/issues/4240
const emptyArray = [];

export default function UbikeTable() {
  const { data } = useUbikeTableContext();
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data: data ?? emptyArray,
    state: {
      sorting,
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  return (
    <table className="ubike-table">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? 'cursor-pointer'
                          : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted()] ?? null}
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
