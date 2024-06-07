import { courseApiSlice } from "@/features/api/courseApiSlice";
import { instructorApiSlice } from "@/features/api/instructorApiSlice";
import { store } from "@/store";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const AdminPrefetchComponent = () => {
  useEffect(() => {
    store.dispatch(instructorApiSlice.endpoints.getAllInstructors.initiate(""));

    store.dispatch(courseApiSlice.endpoints.getAllCourses.initiate(""));
  }, []);
  return <Outlet />;
};

export const InstructorPrefetchComponent = () => {
  useEffect(() => {}, []);
  return <Outlet />;
};
