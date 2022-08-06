import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Store";
import { combineReducers } from "redux";

interface IFormInput {
  email: string;
  password: string;
  name: string;
}

export const addNewUser = createAsyncThunk(
  "user/addNewUser",
  async (initialUser: IFormInput) => {
    try {
      console.log("Email", initialUser.email);
      console.log("Password", initialUser.password);
      const response = await fetch(
        "https://pro-commerce1.herokuapp.com/api/v1/signup",
        {
          method: "POST",
          headers: {},
          body: new URLSearchParams({
            email: initialUser.email,
            password: initialUser.password,
            name: initialUser.name,
          }),
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log(result,'responce')
        console.log("my token: ", result.token);
        return result;
      }
    } catch (err) {

      return console.error(err,'err1111111111111111111111');
    }
  }
);


console.log(addNewUser,'addNewUser')
  const initialState: any = {
    signup: [],
    status: "idle", // values: idle | loading | succeeded | failed
    error: null,
  };

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      addNewUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        // console.log(action.payload,789654)
        // console.log("action.payload: ", action.payload.token);
        // console.log("action value: ", String(action.payload.user.name));
        if(action.payload){

          action.payload.user.email = String(action.payload.user.email);
          action.payload.user.password = String(action.payload.user.password);
          action.payload.user.name = String(action.payload.user.name);
          state.signup.push(action.payload);
        }
      }
    );
  },
});

export const reducer = combineReducers({
  signup: signupSlice.reducer,
});
// export const selectPosts = (state: RootState) => state.signup;
export const getPostsStatus = (state: RootState) => state.reducer.signup;
// export const getPostsError = (state: RootState) => state.signup.error;
export default signupSlice;
