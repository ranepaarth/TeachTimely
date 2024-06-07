import { setInstructors } from "../instructorsSlice";
import { apiSlice } from "./apiSlice";

export const instructorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllInstructors: builder.query({
      query: () => ({
        url: "/admin/instructors",
        method: "GET",
      }),
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
  }),
});

export const { useGetAllInstructorsQuery } = instructorApiSlice;
