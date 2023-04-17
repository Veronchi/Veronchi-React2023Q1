import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, DataInterface } from '@/utils/interfaces';

export const charactersAPI = createApi({
  reducerPath: 'charactersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: ' https://rickandmortyapi.com/api' }),
  endpoints: (build) => ({
    fetchAllCharacters: build.query<DataInterface, string>({
      query: (name: string) => ({
        url: '/character',
        params: {
          name: name,
        },
      }),
    }),
    fetchCharacter: build.query<Character, number>({
      query: (id: number) => ({
        url: `/character/${id}`,
      }),
    }),
  }),
});
