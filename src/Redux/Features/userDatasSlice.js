import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  teamManager: null,
  shifts: null,
  newJobs: null,
  isLoading: false,
  isError: null,
  employer: null,
  userPaymentId: null,
  isSubscribed: null,
  subPlanData: {},
};

const userDatasSlice = createSlice({
  name: 'userDatas',
  initialState,
  reducers: {
    getCurrentUser: (state, action) => {
      state.user = action.payload;
    },

    getSubPlanData: (state, action) => {
      state.subPlanData = action.payload;
    },

    getEmployerProfile: (state, action) => {
      state.employer = action.payload;
    },

    getPaymentId: (state, action) => {
      state.userPaymentId = action.payload;
    },

    validateSubscription: (state, action) => {
      state.isSubscribed = action.payload;
    },

    clearUser: (state) => {
      state.user = null;
    },

    allNewJobs: (state, action) => {
      state.newJobs = action.payload;
    },

    allTeamMembers: (state, action) => {
      state.teamManager = action.payload;
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      state.newJobs = state.newJobs.filter((job) => job._id !== id);
    },
  },
});

export const {
  getCurrentUser,
  getPaymentId,
  clearUser,
  deleteItem,
  allNewJobs,
  allTeamMembers,
  getEmployerProfile,
  validateSubscription,
  getSubPlanData,
} = userDatasSlice.actions;

export const selectUser = (state) => state.userDatasSlice;
export const selectTeamMember = (state) => state.userDatasSlice.teamManager;
export const selectEmployer = (state) => state.userDatasSlice.employer;
export const selectPaymentId = (state) => state.userDatasSlice.userPaymentId;
export const selectSubValidity = (state) => state.userDatasSlice.isSubscribed;
export const selectSubPlan = (state) => state.userDatasSlice.subPlanData;

export default userDatasSlice.reducer;
