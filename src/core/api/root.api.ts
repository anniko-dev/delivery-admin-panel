import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Shipment } from '@/core/models/shipment.model.ts';

export const api = createApi({
  reducerPath: 'locationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cargo-api.onrender.com/',
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
      headers.set('Authorization', '7');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getShipmentsSerials: builder.query({
      query: (search) => ({
        url: 'shipments/serials',
        method: 'GET',
        params: {
          search: search,
        },
      }),
    }),
    getShipment: builder.query<Shipment, string>({
      query: (serial_number) => ({
        url: 'shipments/single/fix_me',
        method: 'GET',
        params: {
          serial_number: serial_number,
        },
      }),
    }),
  }),
});

export const { useGetShipmentsSerialsQuery, useGetShipmentQuery } = api;
