import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authUser: {
    userId: null,
    userEmail: null,
    userName: null,
  },
  avatar: null,
  coyName: null,
  isLoggedIn: false,
};

export const userAuthSlice = createSlice({
  name: 'userDatas',
  initialState: initialState,

  reducers: {
    userAuthData: (state, action) => {
      state.authUser = action.payload;
      state.isLoggedIn = true;
    },

    getUserAvatar: (state, action) => {
      state.avatar = action.payload;
    },

    getAgentCoyName: (state, action) => {
      state.coyName = action.payload;
    },

    userLogOut: (state) => {
      state.authUser.userId = null;
      state.authUser.userEmail = null;
      state.isLoggedIn = false;
    },
  },
});

export const { userAuthData, userLogOut, getUserAvatar, getAgentCoyName } =
  userAuthSlice.actions;

export const selectUserData = (state) => state.userAuthSlice;
export const selectUserName = (state) => state.userAuthSlice.coyName;
export const selectUserAvatar = (state) => state.userAuthSlice.avatar;

export default userAuthSlice.reducer;
