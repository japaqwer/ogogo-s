import {
  ADD_NEW_ACCOUNT,
  ADD_ACCOUNT_SUCCESS,
  ADD_ACCOUNT_FAIL,
  UPDATE_ACCOUNT,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAIL,
} from "./actionTypes";

export const addNewAccount = (account: any, history: any) => ({
  type: ADD_NEW_ACCOUNT,
  payload: { account, history },
});

export const addAccountSuccess = (user: any) => ({
  type: ADD_ACCOUNT_SUCCESS,
  payload: user,
});

export const addAccountFail = (error: any) => ({
  type: ADD_ACCOUNT_FAIL,
  payload: error,
});

export const UpdateAccount = (account: any, history: any) => ({
  type: UPDATE_ACCOUNT,
  payload: { account, history },
});

export const UpdateAccountSuccess = (user: any) => ({
  type: UPDATE_ACCOUNT_SUCCESS,
  payload: user,
});

export const UpdateAccountFail = (error: any) => ({
  type: UPDATE_ACCOUNT_FAIL,
  payload: error,
});
