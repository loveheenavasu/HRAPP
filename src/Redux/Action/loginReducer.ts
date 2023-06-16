import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {StorageKey, Storage} from '@Util';
import Toast from '../../Util/Helper/ToastType';

type Detail = {
  email: string;
  name: string;
};

export interface CounterState {
  value: number;
  hideLoader: boolean;
  email: string;
  userId: string;
  userData: Detail;
}

const initialState: CounterState = {
  value: 0,
  hideLoader: false,
  email: '',
  userId: '',
  userData: {name: '', email: ''},
};

interface inputProps {
  email: string;
  name: string;
  password: string;
}

export const getUserLogin = createAsyncThunk(
  'HIT_USER_LOGIN',
  async (pars: inputProps) => {
    return pars;
  },
);

export const loginReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUserCredential: (state, action) => {
      return {...state, hideLoader: false, userId: action?.payload?.userId};
    },
    logOut: state => {
      Toast.success('Logout successfully');
      return {
        ...state,
        hideLoader: false,
        userData: {name: '', email: ''},
        userId: '',
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(getUserLogin.pending, state => {
      return {...state, hideLoader: true};
    });
    builder.addCase(getUserLogin.fulfilled, (state, action) => {
      let details: Detail = action?.payload; //ok
      Storage.storeData(StorageKey.UserData, JSON.stringify(action?.payload));
      Toast.success('Login successfully');
      return {
        ...state,
        hideLoader: false,
        userData: details,
        userId: '1',
      };
    });
    builder.addCase(getUserLogin.rejected, state => {
      return {...state, hideLoader: false};
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  logOut,
  setUserCredential,
} = loginReducer.actions;

export default loginReducer.reducer;
