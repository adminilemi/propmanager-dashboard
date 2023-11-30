import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allJobs: null,
  employerId: '',
  searchQuery: '',
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
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    setFilterQuery: (state, action) => {
      state.filterQuery = action.payload;
    },
  },
});

export const {
  getAllJobs,
  setSearchQuery,
  getEmployerId,
  getAllOngoingJobs,
  setFilterQuery,
} = jobSlice.actions;
export const selectJobs = (state) => state.jobSlice;
export const selectOngoingJobs = (state) => state.jobSlice.ongoingJobs;
export const selectEmployerId = (state) => state.jobSlice.employerId;

export const selectSearch = (state) => state.jobSlice.searchQuery;
export const selectFilterQuery = (state) => state.jobSlice.filterQuery;
export default jobSlice.reducer;
