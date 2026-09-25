import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProductsResponse } from "../types/responseTypes";
import { BASE_API_URL } from "../constant/url-constant";

export const productApi = createApi({
  reducerPath: "productApi",

  baseQuery: fetchBaseQuery({
    baseUrl:  BASE_API_URL,
  }),

  endpoints: (builder) => ({
      getProducts: builder.query<ProductsResponse, void>({
      query: () => "/products",
    }),
  }),
});

export const { useGetProductsQuery } = productApi;