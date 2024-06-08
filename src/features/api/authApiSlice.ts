import { logout, setAccessToken, setCredentials } from "../userSlice";
import { apiSlice } from "./apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
      async onQueryStarted(_, api) {
        try {
          const { data } = await api.queryFulfilled;
          //console.log(data);
          await api.dispatch(setCredentials(data.user));
          await api.dispatch(setAccessToken(data.accessToken));
        } catch (error) {}
      },
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        credentials: "include",
      }),
      async onQueryStarted(_, api) {
        try {
          await api.queryFulfilled;
          api.dispatch(logout());
          setTimeout(() => {
            api.dispatch(apiSlice.util.resetApiState());
          }, 1000);
        } catch (error) {
          //console.log(error);
        }
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = authApi;
