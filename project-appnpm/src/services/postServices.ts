import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PostsResponse } from "../types/responseTypes";
import { BASE_API_URL } from "../constant/url-constant";

export const postApi=createApi({
     reducerPath: "postsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponse, void>({
      query: () => "/posts",
    }),
  }),
})

export const { useGetPostsQuery } = postApi;