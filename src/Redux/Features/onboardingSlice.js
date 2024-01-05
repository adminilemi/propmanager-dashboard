import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  agentData: null,
};

export const onboardingSlice = createSlice({
  name: 'onboardingData',
  initialState,

  reducers: {
    addAgentData: (state, action) => {
      state.agentData = action.payload;
    },

    resetOnboardingState: () => {
      // Reset the state to the initial state
      return initialState;
    },
  },
});

export const { addAgentData, resetOnboardingState } = onboardingSlice.actions;

export const selectAgentData = (state) => state.onboardingSlice;

export default onboardingSlice.reducer;
