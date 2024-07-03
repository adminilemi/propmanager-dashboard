import { createSlice } from '@reduxjs/toolkit';

const notifsSlice = createSlice({
  name: 'notifsSlice',
  initialState: {
    notifs: [],
  },

  reducers: {
    getNotifs: (state, action) => {
      state.notifs = action.payload;
    },
  },
});

export const { getNotifs, initSocket } = notifsSlice.actions;
export const selectNotifs = (state) => state.notifsSlice.notifs;

export default notifsSlice.reducer;
