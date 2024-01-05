import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const customBaseQuery = fetchBaseQuery({
  baseUrl: 'https://ile-mi-app.onrender.com/',

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

  tagTypes: ['allProperty', 'jobs', 'candidates', 'Teams'],

  // All endpoints
  endpoints: (builder) => ({
    // get user data
    getEmployer: builder.query({
      query: (id) => `/employer/${id}`,

      //   the param here is the id, hence the reason for id: arg
      providesTags: [{ type: 'allProperty', id: 'LIST' }],
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
  }),
});

export const {
  useGetEmployerQuery,
  useCreatePropertyMutation,
  useGetAllPropertiesQuery,
  useUpdateAgentMutation,
  useChangePasswordMutation,
} = apiSLice;
