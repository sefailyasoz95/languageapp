import {createAsyncThunk} from '@reduxjs/toolkit';
import {GetObjectsAsync} from '../services/objectService';
export const getAllObjects = createAsyncThunk(
  'objects/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().global.user.token;
      return await GetObjectsAsync(token);
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
