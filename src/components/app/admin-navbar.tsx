import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const AdminNavbar = () => {
  return (
    <nav className="">
      <Button asChild variant={"link"} className="text-base">
        <NavLink to={`/admin/instructors`}>Instructors</NavLink>
      </Button>
      <Button asChild variant={"link"} className="text-base">
        <NavLink to={`/admin/courses`}>Courses</NavLink>
      </Button>
      <Button asChild variant={"link"} className="text-base">
        <NavLink to={`/admin/create-course`}>Create Course</NavLink>
      </Button>
    </nav>
  );
};

export default AdminNavbar;
