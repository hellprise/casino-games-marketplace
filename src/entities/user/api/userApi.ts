import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from '@/app/config/network'

import { IUser } from '../model/User'

interface IRequestGetUser {
	userId: number
}

type ITResponseGetUser = Pick<IUser, 'name' | 'nickname'>

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL
	}),
	endpoints: builder => ({
		getUser: builder.query<ITResponseGetUser, IRequestGetUser>({
			query: ({ userId }) => `/users/${userId}`
		})
	})
})

export const { useGetUserQuery } = userApi
