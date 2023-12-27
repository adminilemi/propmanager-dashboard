import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSLice } from '../../api/apiSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import globalSlice from '../Features/globalSlice';
import createProperty from '../Features/createPropertySlice';
import userAuthSlice from '../Features/userAuthSlice';
import userDatasSlice from '../Features/userDatasSlice';
import jobSlice from '../Features/jobsSlice';
import notifsSlice from '../Features/notifsSlice';

const allReducers = combineReducers({
  notifsSlice,
  globalSlice,
  jobSlice,
  createProperty,
  userAuthSlice,
  userDatasSlice,
  [apiSLice.reducerPath]: apiSLice.reducer,
});

const mainStores = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSLice.middleware), // concat RTK middleware
});

export const makeStore = () => {
  //  Check to confirm if we are on client side to persist, because we don't need to persist on server side
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return mainStores;
  } else {
    // We need to persist on client side

    const persistConfig = {
      key: 'IlemiAgent',
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, allReducers);

    let store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat(apiSLice.middleware),
    });

    store._persistor = persistStore(store);

    return store;
  }
};

const store = makeStore();
export default store;
