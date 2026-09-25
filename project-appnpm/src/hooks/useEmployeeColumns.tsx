
import type { ColumnDef } from "@tanstack/react-table";
import type { Employee } from "../types/responseTypes"; 

const useEmployeeColumns = (): ColumnDef<any, Employee>[] => {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "gender",
      header: "Gender",
    },
    {
      accessorKey: "phone",
      header: "Phone Number",
    },
  ];
};

export default useEmployeeColumns;
