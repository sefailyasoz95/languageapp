import {createAsyncThunk} from '@reduxjs/toolkit';
import {Login, Register} from '../../Models/User';
import {LoginAsync, RegisterAsync} from '../services/authServices';

export const login = createAsyncThunk(
  'user/login',
  async (data: Login, thunkAPI) => {
    try {
      //   const token = thunkAPI.getState().auth.user.token;
      return await LoginAsync(data);
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

export const register = createAsyncThunk(
  'user/register',
  async (data: Register, thunkAPI) => {
    try {
      return await RegisterAsync(data);
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
