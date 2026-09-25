
import type { ColumnDef } from "@tanstack/react-table";
import type { Product } from "../types/responseTypes";

const useProductColumns = (): ColumnDef<any, Product>[] => {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
    {
      accessorKey: "rating",
      header: "Rating",
    },
    {
      accessorKey: "stock",
      header: "Stock",
    },
  ];
};

export default useProductColumns;
