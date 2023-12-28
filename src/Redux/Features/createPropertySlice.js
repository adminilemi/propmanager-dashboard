import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  address: null,
  listingInfo: null,
  ExteriorImages: [],
  InteriorImages: [],
  Videos: [],
};

export const createPropertySlice = createSlice({
  name: 'propertyData',
  initialState,

  reducers: {
    addAddress: (state, action) => {
      state.address = action.payload;
    },

    addListingInfo: (state, action) => {
      state.listingInfo = action.payload;
    },

    addExteriorImages: (state, action) => {
      state.ExteriorImages.push(action.payload);
    },

    addInteriorImages: (state, action) => {
      state.InteriorImages.push(action.payload);
    },

    addVideos: (state, action) => {
      state.Videos.push(action.payload);
    },
  },
});

export const {
  addAddress,
  addExteriorImages,
  addInteriorImages,
  addListingInfo,
  addVideos,
} = createPropertySlice.actions;

export const selectProperty = (state) => state.createPropertySlice;

export default createPropertySlice.reducer;
