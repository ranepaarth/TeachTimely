import { useLogoutUserMutation } from "@/features/api/authApiSlice";
import { logout } from "@/features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  const handleClick = async () => {
    //console.log("clicked");
    try {
      dispatch(logout());
      await logoutUser("").then(() => {
        navigate("/login");
      });
    } catch (error) {
      //console.log(error);
    }
  };
  return (
    <nav className="w-full bg-white p-4 flex justify-between items-center border-b  shadow-sm">
      <a href="/" className="text-xl md:text-2xl font-bold">
        TeachTimely 📚
      </a>
      <Button
        variant={"default"}
        className="bg-destructive text-destructive-foreground hover:bg-red-600 md:text-lg"
        onClick={handleClick}
      >
        Log out
      </Button>
    </nav>
  );
};

export default Navbar;
