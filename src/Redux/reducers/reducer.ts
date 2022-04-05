import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getAllAnimals} from '../actions/animalActions';
import {login, register} from '../actions/authActions';
import {getAllCategories} from '../actions/categoryActions';
import {getAllObjects} from '../actions/objectActions';
const initialState = {
  categories: [],
  isFetchingCategories: false,
  objects: [],
  isFetchingObjects: false,
  animals: [],
  isFetchingAnimals: false,
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
      })
      .addCase(getAllAnimals.pending, state => {
        state.isFetchingAnimals = true;
      })
      .addCase(getAllAnimals.fulfilled, (state, action: any) => {
        state.animals = action.payload.animals;
        state.isFetchingAnimals = false;
      })
      .addCase(getAllAnimals.rejected, (state, action: any) => {
        state.message = action.payload.message;
        state.error = true;
        state.isFetchingAnimals = false;
      })
      .addCase(getAllObjects.pending, state => {
        state.isFetchingObjects = true;
      })
      .addCase(getAllObjects.fulfilled, (state, action: any) => {
        state.objects = action.payload.objects;
        state.isFetchingObjects = false;
      })
      .addCase(getAllObjects.rejected, (state, action: any) => {
        state.message = action.payload.message;
        state.error = true;
        state.isFetchingObjects = false;
      });
  },
});

export const {clearStates, setUser} = reducer.actions;

export default reducer.reducer;
