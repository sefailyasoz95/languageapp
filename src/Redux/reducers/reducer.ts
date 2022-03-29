import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {login, register} from '../actions/authActions';
import {getAllCategories} from '../actions/categoryActions';
const initialState = {
  categories: [],
  isFetchingCategories: true,
  objects: [],
  isFetchingObjects: true,
  animals: [],
  isFetchingAnimals: true,
  error: false,
  success: false,
  message: '',
  isAuthenticated: false,
  user: null,
  isFetchingUser: false,
};

export const reducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    clearStates: state => {
      state.message = '';
      state.isFetchingAnimals = false;
      state.isFetchingCategories = false;
      state.isFetchingObjects = false;
      state.error = false;
      state.success = false;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isFetchingUser = false;
      state.isAuthenticated = action.payload.user ? true : false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isFetchingUser = true;
      })
      .addCase(login.fulfilled, (state, action: any) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.isFetchingUser = false;
        AsyncStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(login.rejected, (state, action: any) => {
        state.isFetchingUser = false;
        state.error = true;
        state.message = action.payload.message;
      })
      .addCase(register.pending, state => {
        state.isFetchingUser = true;
      })
      .addCase(register.fulfilled, (state, action: any) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.isFetchingUser = false;
        AsyncStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(register.rejected, (state, action: any) => {
        state.isFetchingUser = false;
        state.error = true;
        state.message = action.payload.message;
      })
      .addCase(getAllCategories.pending, state => {
        state.isFetchingCategories = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action: any) => {
        state.categories = action.payload.categories;
        state.isFetchingCategories = false;
      })
      .addCase(getAllCategories.rejected, (state, action: any) => {
        state.message = action.payload.message;
        state.error = true;
        state.isFetchingCategories = false;
      });
  },
});

export const {clearStates, setUser} = reducer.actions;

export default reducer.reducer;
