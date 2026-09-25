import { DataTable } from "../components/table/DataTable";
import { useGetProductsQuery } from "../services/productService";
import useProductColumns from "../hooks/useProductColumns";
import TableHeader from "../constant/TableHeader";

export default function Product() {
  const { data, isLoading, isError } = useGetProductsQuery(undefined);
  const columns = useProductColumns();
 
  return (
  <>
    {isLoading ? (
      <p>Loading products...</p>
    ) : isError ? (
      <p>Failed to load products.</p>
    ) : (
      <>
        <TableHeader
          title="Products"
          description="View and manage all available products."
        />

        <DataTable
          data={data?.products ?? []}
          columns={columns}
        />
      </>
    )}
  </>
);
}
