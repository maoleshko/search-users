import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/search/'
  }),

  endpoints: (builder) => ({
    getUser: builder.query({
      query: ({ userName, order, page = 1 }) =>
        `users?q=${userName}&sort=repositories&order=${order}&per_page=50&page=${page}`
    })
  })
})

export const { useGetUserQuery } = usersApi
