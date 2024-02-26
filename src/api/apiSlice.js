import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const customBaseQuery = fetchBaseQuery({
  baseUrl: 'https://property-4u-befe5e00eae1.herokuapp.com/',

  prepareHeaders: (headers) => {
    // Get your token from wherever you have it stored
    const userToken = Cookies.get('ilemiUserToken');

    if (userToken) {
      // Set the 'Authorization' header with the token
      headers.set('Authorization', `Bearer ${userToken}`);
      headers.set('x-access-token', userToken);
    }

    return headers;
  },
});

export const apiSLice = createApi({
  baseQuery: customBaseQuery,

  tagTypes: ['allProperty', 'jobs', 'sub', 'candidates', 'Teams'],

  // All endpoints
  endpoints: (builder) => ({
    // get user data
    getAgent: builder.query({
      query: (agentId) => `/Agent/get-agent-by-id/${agentId}`,

      //   the param here is the id, hence the reason for id: arg
      providesTags: [{ type: 'sub', id: 'LIST' }],
    }),

    // Update user data in server
    updateAgent: builder.mutation({
      query: (formData) => ({
        url: `/Agent/update-agent
        `,
        method: 'PUT',
        body: formData,
      }),
    }),

    // Create property
    createProperty: builder.mutation({
      query: (formData) => ({
        url: `/property`,
        method: 'POST',
        body: formData,
      }),

      //   after updating user data, refetch the getEmployer endpoints to update the screen without reload
      invalidatesTags: [{ type: 'allProperty', id: 'LIST' }],
    }),

    getAllProperties: builder.query({
      query: (id) => `/property/${id}`,

      //   the param here is the id, hence the reason for id: arg
      providesTags: [{ type: 'allProperty', id: 'LIST' }],
    }),

    changePassword: builder.mutation({
      query: (formData) => ({
        url: `/Agent/change-password`,
        method: 'POST',
        body: formData,
      }),
    }),

    // Subscriptions
    createSubscriptions: builder.mutation({
      query: (formData) => ({
        url: `/payments/make-payment`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'sub', id: 'LIST' }],
    }),

    checkSubValidity: builder.query({
      query: (id) => `/payments/${id}`,

      //   the param here is the id, hence the reason for id: arg
      providesTags: [{ type: 'sub', id: 'LIST' }],
    }),

    // Charts
    getAgentStats: builder.query({
      query: (id) => `/property/statistics/${id}`,

      providesTags: [{ type: 'allProperty', id: 'LIST' }],
    }),

    getAgentMonthlyStats: builder.query({
      query: (id) => `/property/count-by-month/${id} `,
    }),

    getAgentWeeklyStats: builder.query({
      query: (id) => `/property/count-by-last-week/${id} `,
    }),
  }),
});

export const {
  useGetAgentQuery,
  useGetAgentWeeklyStatsQuery,
  useGetAgentMonthlyStatsQuery,
  useGetAgentStatsQuery,
  useCreatePropertyMutation,
  useGetAllPropertiesQuery,
  useUpdateAgentMutation,
  useChangePasswordMutation,
  useCreateSubscriptionsMutation,
  useCheckSubValidityQuery,
} = apiSLice;
