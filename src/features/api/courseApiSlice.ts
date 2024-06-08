import { setAllCourses } from "../coursesSlice";
import { apiSlice } from "./apiSlice";

export const courseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (data) => {
        //console.log(data, "Inside API SLICE");
        //console.log("Request sent");
        return {
          url: "/courses/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Courses"],
    }),
    getAllCourses: builder.query({
      query: () => ({
        url: "/courses",
        method: "GET",
      }),
      async onQueryStarted(_, api) {
        try {
          const { data } = await api.queryFulfilled;
          api.dispatch(setAllCourses(data));
          //console.log(data);
        } catch (error) {
          //console.log(error);
        }
      },
      providesTags: ["Courses"],
    }),
    updateCourse: builder.mutation({
      query: ({ courseId, data }) => ({
        url: `/courses/update/${courseId}/lectures`,
        body: data,
        method: "PATCH",
      }),
      invalidatesTags: ["Courses", "Instructors", "Instructor"],
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useGetAllCoursesQuery,
  useUpdateCourseMutation,
} = courseApiSlice;
