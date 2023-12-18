import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from '@/app/config/network'

import { IWallet } from '../model/Wallet'

enum TAGS {
	BALANCE = 'Balance'
}

type ITResponseGetUser = IWallet

export const walletApi = createApi({
	reducerPath: 'walletApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL
	}),
	tagTypes: [TAGS.BALANCE],
	endpoints: builder => ({
		getBalance: builder.query<ITResponseGetUser, unknown>({
			query: () => `/wallet`,
			providesTags: [TAGS.BALANCE]
		}),
		updateBalance: builder.mutation<ITResponseGetUser, IWallet>({
			query: body => ({
				url: '/wallet',
				method: 'POST',
				body
			}),
			invalidatesTags: [TAGS.BALANCE]
		})
	})
})

export const { useGetBalanceQuery, useUpdateBalanceMutation } = walletApi
