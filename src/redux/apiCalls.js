import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import { dropCartProduct } from "./cartRedux";

import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const deconnexion = (dispatch) => {
  dispatch(logout());
};

export const dropCart = (dispatch) => {
  dispatch(dropCartProduct());
};
