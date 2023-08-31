import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';
import notifyOptions from 'NotifyOptions/NotifyOptions';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

/*
 * POST @ /users/signup
 * body: { name, email, password }

 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      // After successful registration, add the token to the HTTP header
      toast.success('Your registration is successful!', notifyOptions);

      return data;
    } catch (error) {
      toast.error(
        'Sorry, wrong register, try reloading the page!',
        notifyOptions
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      // After successful login, add the token to the HTTP header

      toast.success('Your registration is successful!', notifyOptions);
      return data;
    } catch (error) {
      toast.error(
        'Sorry, wrong request, try reloading the page!',
        notifyOptions
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    toast.info('Your LogOut is successful!', notifyOptions);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
