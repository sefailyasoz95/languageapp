import {createAsyncThunk} from '@reduxjs/toolkit';
import {GetAnimalsAsync} from '../services/animalServices';
export const getAllAnimals = createAsyncThunk(
  'animals/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().global.user.token;
      return await GetAnimalsAsync(token);
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
