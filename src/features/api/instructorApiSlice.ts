import { setInstructors } from "../instructorsSlice";
import { apiSlice } from "./apiSlice";

export const instructorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllInstructors: builder.query({
      query: () => ({
        url: "/admin/instructors",
        method: "GET",
      }),
      // @ts-ignore
      async onQueryStarted(arg, api) {
        try {
          const { data } = await api.queryFulfilled;

          console.log(data);
          await api.dispatch(setInstructors(data));
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      providesTags:["Instructors"]
    }),
    getInstructorCourses:builder.query({
      query:()=>({
        url:'/instructor/me',
        method:'GET'
      }),
      providesTags:['Instructor']
    })
  }),
});

export const { useGetAllInstructorsQuery,useGetInstructorCoursesQuery } = instructorApiSlice;
