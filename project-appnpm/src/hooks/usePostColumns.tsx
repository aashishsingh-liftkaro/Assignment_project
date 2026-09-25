import type { ColumnDef } from "@tanstack/react-table";
import type { Post } from "../types/responseTypes";

const usePostColumns = (): ColumnDef<any, Post>[] => {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "tags",
      header: "Tags",
    },

    {
      accessorFn: (row) => row.reactions.likes,
      id: "likes",
      header: "Likes",
    },

    {
      accessorFn: (row) => row.reactions.dislikes,
      id: "dislikes",
      header: "Dislikes",
    },

    {
      accessorKey: "views",
      header: "Views",
    },

    {
      accessorKey: "userId",
      header: "User ID",
    },
  ];
};

export default usePostColumns;