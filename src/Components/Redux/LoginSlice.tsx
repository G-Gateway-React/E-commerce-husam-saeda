import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Store";
import { combineReducers } from "redux";

interface IFormInput {
  email: string;
  password: string;
//   token: string;
}

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (initialUser: IFormInput) => {
    try {
      console.log("Email", initialUser);
      console.log("Password", initialUser.password);
      const response = await fetch(
        "https://pro-commerce1.herokuapp.com/api/v1/login",
        {
          method: "POST",
          headers: {},
          body: new URLSearchParams({
            email:initialUser.email,
            password: initialUser.password,
            // Authorization: initialUser.token,
          }),
        }
      );
      console.log(response,'responce')
      if (response.ok) {
        const result = await response.json();
        console.log("my token: ", result.token);
        return result;
      }
    } catch (err) {
      console.error(err,'err');
    }
  }
);


console.log(loginUser,'loginUser')
  const initialState: any = {
    login: [],
    status: "idle", // values: idle | loading | succeeded | failed
    error: null,
  };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log(action.payload,789654)
        console.log("action.payload: ", action.payload.token);
        console.log("action value: ", String(action.payload.user.name));
        action.payload.user.email = String(action.payload.user.email);
        action.payload.user.password = String(action.payload.user.password);
        action.payload.user.name = String(action.payload.user.name);
        state.login[0]=(action.payload);
      }
    );
  },
});

export const reducerLogin = combineReducers({
  login: loginSlice.reducer,
});
// export const selectPosts = (state: RootState) => state.signup;
export const getPostsStatus = (state: RootState) => state.reducerLogin.login;
// export const getPostsError = (state: RootState) => state.signup.error;
export default loginSlice;