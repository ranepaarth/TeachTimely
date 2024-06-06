import { instructorApiSlice } from "@/features/api/instructorApiSlice";
import { store } from "@/store";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const AdminPrefetchComponent = () => {
  useEffect(() => {
    const instructors = store.dispatch(
      instructorApiSlice.endpoints.getAllInstructors.initiate("")
    );
  }, []);
  return <Outlet />;
};

export const InstructorPrefetchComponent = () => {
  useEffect(() => {}, []);
  return <Outlet />;
};
