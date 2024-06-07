import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Course {
  _id: string;
  name: string;
  level: "beginner" | "intermediate" | "advance";
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  lectures: any;
}

interface CoursesStateTypes {
  allCourses: Course[];
}

const initialState: CoursesStateTypes = {
  allCourses: [],
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setAllCourses: (state, action: PayloadAction) => {
      console.log(action.payload, "PAYLOAD");
      state.allCourses = action.payload!;
    },
  },
});

export const { setAllCourses } = coursesSlice.actions;

export const getCourses = (state: RootState) => {
  return state.courses.allCourses;
};

export default coursesSlice.reducer;
