import useEmployeeColumns from "../hooks/useEmployeeColumns";
import { DataTable } from "../components/table/DataTable";
import { useGetEmployeeQuery } from "../services/employeeService";
import TableHeader from "../constant/TableHeader";

export default function BasicTable() {
  const { data, isLoading, isError } = useGetEmployeeQuery();
  const columns = useEmployeeColumns();
  
  return (
    <>
      {isLoading ? (
        <p>Loading products...</p>
      ) : isError ? (
        <p>Failed to load products.</p>
      ) : (
        <>
          <TableHeader
            title="Employees"
            description="View and manage all employees."
          />

          <DataTable data={data?.users ?? []} columns={columns as any} />
        </>
      )}
    </>
  );
}
