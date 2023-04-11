import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import * as Storage from '../../Service/Storage';
import {UserData} from '../../Util/StorageKey';
import ToastMsg from '../../CommonComponent/Toast/CustomToast';

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

export const getUserLogin = createAsyncThunk('HIT_USER_LOGIN', async pars => {
  console.log('-----getUserLogin---pars--->', pars);
  return pars;
});

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
      ToastMsg({
        status: 'success',
        msg: 'Logout successfully',
      });
      return {
        ...state,
        hideLoader: false,
        userData: {name: '', email: ''},
        userId: '',
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(getUserLogin.pending, (state, action) => {
      return {...state, hideLoader: true};
    });
    builder.addCase(getUserLogin.fulfilled, (state, action) => {
      let details: Detail = action?.payload; //ok
      Storage.storeData(UserData, JSON.stringify(action?.payload));
      ToastMsg({
        status: 'success',
        msg: 'Login successfully',
      });
      return {
        ...state,
        hideLoader: false,
        userData: details,
        userId: '1',
      };
    });
    builder.addCase(getUserLogin.rejected, (state, action) => {
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
