import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allJobs: null,
  employerId: '',
  filterQuery: [],
  ongoingJobs: null,
};

const jobSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {
    getAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    getAllOngoingJobs: (state, action) => {
      state.ongoingJobs = action.payload;
    },
    getEmployerId: (state, action) => {
      state.employerId = action.payload;
    },

    setFilterQuery: (state, action) => {
      state.filterQuery = action.payload;
    },
  },
});

export const { getAllJobs, getEmployerId, getAllOngoingJobs, setFilterQuery } =
  jobSlice.actions;
export const selectJobs = (state) => state.jobSlice;
export const selectOngoingJobs = (state) => state.jobSlice.ongoingJobs;
export const selectEmployerId = (state) => state.jobSlice.employerId;

export const selectFilterQuery = (state) => state.jobSlice.filterQuery;
export default jobSlice.reducer;
