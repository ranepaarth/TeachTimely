import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  id: string;
  role: "INSTRUCTOR";
}
interface InstructorsStateTypes {
  allInstructors: User[];
}

const initialState: InstructorsStateTypes = {
  allInstructors: [],
};

export const userSlice = createSlice({
  name: "instructor",
  initialState,
  reducers: {
    setInstructors: (state: InstructorsStateTypes, action: PayloadAction) => {
      console.log(action);
      state.allInstructors = action.payload!;
    },
  },
});

export const { setInstructors } = userSlice.actions;

export const selectInstructors = (state: InstructorsStateTypes) => {
  console.log(state.allInstructors);
  return state.allInstructors;
};

export default userSlice.reducer;
