import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getSomeData} from '../actions/actions';
import {User} from '../../Models/User';
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
  isFetchingUser: true,
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
    // builder
    //   .addCase(getSomeData.pending, (state, action) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(
    //     getSomeData.fulfilled,
    //     (state, action: PayloadAction<boolean>) => {
    //       state.isLoading = false;
    //       state.isAuthenticated = action.payload;
    //     },
    //   )
    //   .addCase(getSomeData.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //   });
  },
});

export const {clearStates, setUser} = reducer.actions;

export default reducer.reducer;
