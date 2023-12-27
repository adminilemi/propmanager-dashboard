import { createSlice } from '@reduxjs/toolkit';

const propertyDataSlice = createSlice({
  name: 'propertyData',
  initialState: {
    property: null,
  },

  reducers: {
    addProperty: (state, action) => {
      state.property = action.payload;
    },
  },
});

export const { addProperty } = propertyDataSlice.actions;

export const SelectProperty = (state) => state.propertyDataSlice;

export default propertyDataSlice.reducer;
