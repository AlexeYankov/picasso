import {API_URL} from "shared/config";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Post} from "./models";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: (builder) => {
        return {
            getPosts: builder.query<Array<Post>, void>({
                query: () => `posts`
            }),
            getPost: builder.query<Post, void>({
                query: (id) => `posts/${id}`
            })
        };
    }
});

export const {useGetPostsQuery, useGetPostQuery} = baseApi;
