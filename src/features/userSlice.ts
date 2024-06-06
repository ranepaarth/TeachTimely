import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  id: string;
  role: "ADMIN" | "INSTRUCTOR";
}
interface UserStateTypes {
  user: User | null | string;
  token: string | null;
}

const initialState: UserStateTypes = {
  user: sessionStorage.getItem("userInfo")
    ? JSON.parse(sessionStorage.getItem("userInfo")!)
    : null,
  token: sessionStorage.getItem("token")
    ? JSON.parse(sessionStorage.getItem("token")!)
    : null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state: UserStateTypes, action: PayloadAction) => {
      state.user = action.payload!;
      sessionStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    setAccessToken: (state: UserStateTypes, action: PayloadAction) => {
      state.token = action.payload!;
      sessionStorage.setItem("token", JSON.stringify(action.payload));
    },
    logout: (state: UserStateTypes) => {
      state.user = null;
      state.token = null;
      sessionStorage.removeItem("userInfo");
      sessionStorage.removeItem("token");
    },
  },
});

export const { setCredentials, setAccessToken, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.users.user;

export default userSlice.reducer;
