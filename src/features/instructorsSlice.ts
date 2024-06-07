import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Lecture {
  date:string,
  _id:string
}
export interface User {
  name: string;
  email: string;
  id: string;
  role: "INSTRUCTOR";
  lectures:Lecture[]
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
      state.allInstructors = action.payload!;
    },
  },
});

export const { setInstructors } = userSlice.actions;

export const selectInstructors = (state: RootState) => {
  return state.instructors.allInstructors;
};

export default userSlice.reducer;
