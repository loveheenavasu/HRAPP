import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import * as Storage from '../../Service/Storage';
import {UserData} from '../../Util/StorageKey';
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

export const getUserLogin = createAsyncThunk(
  'HIT_USER_LOGIN',
  async (pars: {email: string; name: string; password: string}) => {
    return pars;
  },
);

export const loginReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
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
      Storage.storeData(UserData, JSON.stringify(action?.payload));
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
