// third-party
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

// project import
import menu from './menu';
import snackbar from './snackbar';

const initialState = {
  error: null
};

const slice = createSlice({
  name: 'cart',
  initialState
});

const reducers = combineReducers({
  menu,
  snackbar,
  cart: persistReducer(
    {
      key: 'cart',
      storage,
      keyPrefix: 'mantis-ts-'
    },
    slice.reducer
  )
});

export default reducers;
