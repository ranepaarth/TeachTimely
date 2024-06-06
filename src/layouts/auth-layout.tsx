import { Code2Icon, GithubIcon } from "lucide-react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="w-full min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-100 to-purple-400 flex flex-col items-center justify-center">
      <div className="flex-1 flex items-center w-full justify-center">
        <Outlet />
      </div>
      <footer className="p-4 text-neutral-600 flex items-center justify-end gap-4 hover:text-neutral-800 w-full">
        <a href="https://github.com/ranepaarth/teachtimely" target="_blank">
          <Code2Icon />
        </a>
        <a href="https://github.com/ranepaarth" target="_blank">
          <GithubIcon />
        </a>
      </footer>
    </main>
  );
};

export default AuthLayout;
