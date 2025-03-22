import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CatModel } from '../../interfaces';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': import.meta.env.VITE_CATS_API_KEY,
    'Content-Type': 'application/json',
  },
});

const baseQueryWithRetry: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    result = await baseQuery(args, api, extraOptions);
  }
  return result;
};

export const catsApi = createApi({
  reducerPath: 'catsApi',
  baseQuery: baseQueryWithRetry,
  endpoints: (builder) => ({
    getCats: builder.query<CatModel[], void>({
      query: () => '/breeds',
    }),
  }),
});

export const { useGetCatsQuery } = catsApi;
