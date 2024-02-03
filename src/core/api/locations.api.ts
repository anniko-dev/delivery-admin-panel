import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const locationsApi = createApi({
  reducerPath: 'locationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://suggestions.dadata.ru/suggestions/api/',
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
      headers.set('Authorization', 'Token 207756860df769de104ceefb3e60b7498cba43d8');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAddress: builder.query({
      query: (query) => ({
        url: '4_1/rs/suggest/address',
        method: 'GET',
        params: {
          query: query,
        },
      }),
    }),
  }),
});

export const { useGetAddressQuery } = locationsApi;
