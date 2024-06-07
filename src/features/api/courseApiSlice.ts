import { apiSlice } from "./apiSlice";

const courseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (data) => {
        console.log(data, "Inside API SLICE");
        console.log("Request sent");
        return {
          url: "/courses/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Courses"],
    }),
  }),
});

export const { useCreateCourseMutation } = courseApiSlice;
