import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AuthLayout from "./layouts/auth-layout";
import HomePage from "./pages/home-page";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" index element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
