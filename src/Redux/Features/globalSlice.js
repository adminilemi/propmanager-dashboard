import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    count: 0,
    searchQuery: '',
    pageName: '',
  },

  reducers: {
    toggleShow: (state, action) => {
      // Toggle icon state based on the IDs
      const id = action.payload;
      return {
        ...state,
        [id]: !state[id],
      };
    },

    increment: (state, action) => {
      state.count = action.payload;
    },

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    updatePageName: (state, action) => {
      state.pageName = action.payload;
    },
  },
});

export const { toggleShow, increment, setSearchQuery, updatePageName } =
  globalSlice.actions;

export const selectGlobal = (state) => state.globalSlice;
export const selectSearch = (state) => state.globalSlice.searchQuery;
export const selectPageName = (state) => state.globalSlice.pageName;
export default globalSlice.reducer;
