import { selectUser, User } from "@/features/userSlice";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const user = useSelector(selectUser) as User;
  //console.log(user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (allowedRoles.includes(user.role)) {
    return <Outlet />;
  }
  return <div>Unauthorized access denied</div>;
};

export default ProtectedRoutes;
