import type { EmployeesResponse } from "../types/responseTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../constant/url-constant";

export const employeeApi=createApi({
     reducerPath: "employeeApi",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
  }),
  endpoints: (builder) => ({
    getEmployee: builder.query<EmployeesResponse,void>({
      query: () => "/users",
    }),
  }),
})

export const { useGetEmployeeQuery } = employeeApi;