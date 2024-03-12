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
        <div className="text-left w-full my-10">

        <h1 className="font-bold text-4xl mb-3 text-theme-orange">Project Archive</h1>
<p>These are several projects that I do, some of them are personal project, and some are team project</p>
        </div>
        <table className="text-left">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="bg-theme-grey rounded-t-md">
              {headerGroup.headers.map(header => (
                <th key={header.id} className="px-3 py-3 first:rounded-tl-md last:rounded-tr-md" >
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
            <tr key={row.id} className="border-b border-theme-off-white hover:bg-theme-orange hover:bg-opacity-10">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-3 py-3">
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
