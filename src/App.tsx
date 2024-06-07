import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AuthRoutes from "./components/auth/auth-routes";
import ProtectedRoute from "./components/auth/protected-route";
import {
  AdminPrefetchComponent,
  InstructorPrefetchComponent,
} from "./components/prefetch-component";
import AdminLayout from "./layouts/admin-layout";
import AppLayout from "./layouts/app-layout";
import AuthLayout from "./layouts/auth-layout";
import CoursesPage from "./pages/admin-courses-page";
import CreateCoursePage from "./pages/admin-create-course-page";
import AdminInstructors from "./pages/admin-instructors";
import AdminPage from "./pages/admin-page";
import HomePage from "./pages/home-page";
import InstructorPage from "./pages/instructor-page";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";
import { store } from "./store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthRoutes />}>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" index element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Route>
      <Route element={<AppLayout />}>
        <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
          <Route element={<AdminPrefetchComponent />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/instructors" element={<AdminInstructors />} />
              <Route path="/admin/courses" element={<CoursesPage />} />
              <Route
                path="/admin/create-course"
                index
                element={<CreateCoursePage />}
              />
            </Route>
          </Route>
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["INSTRUCTOR"]} />}>
          <Route element={<InstructorPrefetchComponent />}>
            <Route path="/instructor" element={<InstructorPage />} />
          </Route>
        </Route>
      </Route>
    </>
  )
);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
