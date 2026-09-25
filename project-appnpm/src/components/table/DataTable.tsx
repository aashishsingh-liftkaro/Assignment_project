import { useMemo, useState } from "react";

import {
  useTable,
  tableFeatures,
  flexRender,
  rowPaginationFeature,
  createPaginatedRowModel,
  type ColumnDef,
  type RowData,
} from "@tanstack/react-table";

import "./DataTable.scss";

type DataTableProps<TData extends RowData> = {
  data: TData[];
  columns: ColumnDef<any, TData>[];
};

export function DataTable<TData extends RowData>({
  data,
  columns,
}: DataTableProps<TData>) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const features = useMemo(
    () =>
      tableFeatures({
        rowPaginationFeature,
        paginatedRowModel: createPaginatedRowModel(),
      }),
    [],
  );

  const table = useTable({
    data,
    columns: columns as never,
    features,

    state: {
      pagination,
    },

    onPaginationChange: setPagination,
  });

  const rows = table.getRowModel().rows;
  const headers = table.getHeaderGroups()[0]?.headers ?? [];

  return (
    <div className="data-table-container">
      {/* Table */}
      <div className="data-table-wrapper">
        <table className="data-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="data-table-empty">
                  No data found
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={row.id}>
                  {headers.map((header) => {
                    if (header.isPlaceholder) {
                      return null;
                    }

                    const column = header.column;

                    return (
                      <td key={`${row.id}-${column.id}`}>
                        {row.getValue(column.id) as React.ReactNode}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="data-table-pagination">
        <div className="data-table-pagination-controls">
          <button
            type="button"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>

          <button
            type="button"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>

          <span>
            Page <strong>{pagination.pageIndex + 1}</strong> of{" "}
            <strong>{table.getPageCount()}</strong>
          </span>

          <button
            type="button"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>

          <button
            type="button"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
        </div>

        <select
          value={pagination.pageSize}
          onChange={(event) => {
            setPagination({
              pageIndex: 0,
              pageSize: Number(event.target.value),
            });
          }}
        >
          {[5, 10, 20, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
