import { selectUser, User } from "@/features/userSlice";
import { useSelector } from "react-redux";

const AdminPage = () => {
  const user = useSelector(selectUser) as User;
  return (
    <section>
      <div className="text-lg text-neutral-700 font-semibold my-2">
        Welcome Admin, {user?.name}
      </div>
    </section>
  );
};

export default AdminPage;
