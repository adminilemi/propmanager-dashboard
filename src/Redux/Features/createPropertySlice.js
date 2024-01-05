import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  address: null,
  listingInfo: null,
  ExteriorImages: [],
  Amenities: [],
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
      state.ExteriorImages = action.payload;
    },

    addInteriorImages: (state, action) => {
      state.InteriorImages = action.payload;
    },

    addVideos: (state, action) => {
      state.Videos = action.payload;
    },

    addAmenities: (state, action) => {
      state.Amenities = action.payload;
    },

    resetState: () => {
      // Reset the state to the initial state
      return initialState;
    },
  },
});

export const {
  addAddress,
  addExteriorImages,
  addInteriorImages,
  addListingInfo,
  addVideos,
  addAmenities,
  resetState,
} = createPropertySlice.actions;

export const selectProperty = (state) => state.createPropertySlice;

export default createPropertySlice.reducer;
