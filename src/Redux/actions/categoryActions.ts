import {createAsyncThunk} from '@reduxjs/toolkit';
import {GetCategoriesAsync} from '../services/categoryServices';

export const getAllCategories = createAsyncThunk(
  'category/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().global.user.token;
      return await GetCategoriesAsync(token);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);
