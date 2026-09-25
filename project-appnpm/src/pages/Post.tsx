import { useGetPostsQuery } from "../services/postServices";
import usePostColumns from "../hooks/usePostColumns";
import { DataTable } from "../components/table/DataTable";
import TableHeader from "../constant/TableHeader";

export default function Post() {
  const { data, isLoading, isError } = useGetPostsQuery();
  const columns = usePostColumns();

  return (
    <>
      {isLoading ? (
        <p>Loading products...</p>
      ) : isError ? (
        <p>Failed to load products.</p>
      ) : (
        <>
          <TableHeader
            title="Posts"
            description="View all posts and their engagement details."
          />
          <DataTable data={data?.posts ?? []} columns={columns} />
        </>
      )}
    </>
  );
}
