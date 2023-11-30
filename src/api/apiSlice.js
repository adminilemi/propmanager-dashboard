import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { useCookies } from '../Hooks/cookiesHook';
import Cookies from 'js-cookie';

// const { getTokenCookie } = useCookies();

const customBaseQuery = fetchBaseQuery({
  baseUrl: 'https://emdo-app-772a8ada7729.herokuapp.com/',

  prepareHeaders: (headers) => {
    // Get your token from wherever you have it stored
    const userToken = Cookies.get('userToken');

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

  tagTypes: ['getEmployer', 'jobs', 'candidates', 'Teams'],

  // All endpoints
  endpoints: (builder) => ({
    // get user data
    getEmployer: builder.query({
      query: (id) => `/employer/${id}`,

      //   the param here is the id, hence the reason for id: arg
      providesTags: [{ type: 'getEmployer', id: 'LIST' }],
    }),

    getEmployee: builder.query({
      query: (id) => `/employee/${id}`,
    }),

    // Update user data in server
    updateUser: builder.mutation({
      query: (formData) => ({
        url: `/employer/update-employer`,
        method: 'POST',
        body: formData,
      }),

      //   after updating user data, refetch the getEmployer endpoints to update the screen without reload
      invalidatesTags: [{ type: 'getEmployer', id: 'LIST' }],
    }),

    getUpComingShifts: builder.query({
      query: (formData) => ({
        url: `/jobs/employer-upcoming-shifts`,
        method: 'POST',
        body: formData,
      }),
      providesTags: [{ type: 'candidates', id: 'List' }],
    }),

    createJob: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/jobs/createjob/${id}`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'jobs', id: 'LIST' }],
    }),

    editJob: builder.mutation({
      query: (formData) => ({
        url: `/jobs/updatejobs`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'jobs', id: 'LIST' }],
    }),

    getNewJobs: builder.query({
      query: (formData) => ({
        url: `/jobs/Getjobbyemployer`,
        method: 'POST',
        body: formData,
      }),
      //   The id here are unknown, hence the reason for id: arg.id, so we get id, from the param: formData
      providesTags: [{ type: 'jobs', id: 'LIST' }],
    }),

    // getSingleJobById: builder.query({
    //   query: (id) => `/jobs/${id}`,
    //   invalidatesTags: [{ type: 'jobs', id: 'LIST' }],
    // }),

    deleteJobById: builder.mutation({
      query: (id) => ({
        url: `/jobs/deletejobs/${id}`,
        method: 'delete',
      }),

      invalidatesTags: [{ type: 'jobs', id: 'LIST' }],
    }),

    getOngoingJobs: builder.query({
      query: (formData) => ({
        url: `/jobs/employer-find-ongoingjobs`,
        method: 'POST',
        body: formData,
      }),
    }),

    getCompletedJobs: builder.query({
      query: (formData) => ({
        url: `/jobs/employer-find-expiredjobs`,
        method: 'POST',
        body: formData,
      }),
    }),

    getTeamMemebers: builder.query({
      query: (id) => `/teamsmng/${id}`,

      providesTags: [{ type: 'Teams', id: 'TeamList' }],
    }),

    getATeamMember: builder.query({
      query: (teamid) => `/teamsmng/get-team-manager/${teamid}`,
      providesTags: [{ type: 'Teams', id: 'TeamList' }],
    }),

    addTeamMemebers: builder.mutation({
      query: (formData) => ({
        url: `/teamsmng`,
        method: 'POST',
        body: formData,
      }),

      invalidatesTags: [{ type: 'Teams', id: 'TeamList' }],
    }),

    editTeamMemebers: builder.mutation({
      query: (formData) => ({
        url: `/teamsmng/update`,
        method: 'POST',
        body: formData,
      }),

      invalidatesTags: [{ type: 'Teams', id: 'TeamList' }],
    }),

    deleteTeamMemebers: builder.mutation({
      query: (id) => ({
        url: `/teamsmng/${id}`,
        method: 'delete',
      }),

      invalidatesTags: [{ type: 'Teams', id: 'TeamList' }],
    }),

    changePassword: builder.mutation({
      query: (formData) => ({
        url: `/employer/change-password`,
        method: 'POST',
        body: formData,
      }),
    }),

    getCandidates: builder.query({
      query: (formData) => ({
        url: `/jobs/employer-find-candidates-by-acceptance`,
        method: 'POST',
        body: formData,
      }),
      providesTags: [{ type: 'candidates', id: 'List' }],
    }),

    updateCandidateJobStatus: builder.mutation({
      query: (formData) => ({
        url: `/jobs/update-employee-acceptance`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'candidates', id: 'List' }],
    }),

    rateCandidates: builder.mutation({
      query: (formData) => ({
        url: `/reviews/create-review`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'candidates', id: 'List' }],
    }),
  }),
});

export const {
  useRateCandidatesMutation,
  useGetEmployeeQuery,
  useUpdateCandidateJobStatusMutation,
  useChangePasswordMutation,
  useDeleteTeamMemebersMutation,
  useGetEmployerQuery,
  useUpdateUserMutation,
  useGetUpComingShiftsQuery,
  useCreateJobMutation,
  useDeleteJobByIdMutation,
  useEditJobMutation,
  useGetCompletedJobsQuery,
  useGetNewJobsQuery,
  useGetOngoingJobsQuery,
  useGetTeamMemebersQuery,
  useAddTeamMemebersMutation,
  useEditTeamMemebersMutation,
  useGetATeamMemberQuery,
  useGetCandidatesQuery,
  //   useGetSingleJobByIdQuery,
} = apiSLice;
