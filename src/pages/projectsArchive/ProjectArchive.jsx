import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../../Layouts/MainLayout";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import projectData from './projectData.json'

const columnHelper = createColumnHelper()


const columns = [
  columnHelper.accessor('id', {
    header: () => 'No.',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('title', {
    header: () => 'Project',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('techStack', {
    header: () => 'Tech Stack',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('desc', {
    header: () => 'Description',
    cell: info => info.getValue(),
  }),
]

export const ProjectArchive = () => {
  const [data, setData] = React.useState(() => [...projectData])
  const rerender = React.useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <MainLayout>
      <div className="flex flex-col text-center justify-center items-center pt-10 md:pt-20 mx-5 px-10 md:px-32" >
        <table className="text-left">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
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
    </MainLayout>
  );
};
