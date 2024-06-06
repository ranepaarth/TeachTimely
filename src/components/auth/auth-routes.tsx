import { selectUser, User } from "@/features/userSlice";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = () => {
  const user = useSelector(selectUser) as User;
  if (user && user.role === "ADMIN") {
    return <Navigate to={"/admin"} />;
  }
  if (user && user.role === "INSTRUCTOR") {
    return <Navigate to={"/instructor"} />;
  }
  return <Outlet />;
};

export default AuthRoutes;
