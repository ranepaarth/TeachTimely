import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-4 items-center">
      <h2 className="text-5xl font-extrabold text-stone-800 md:text-6xl">
        TeachTimely 📚
      </h2>
      <p className="text-neutral-600 text-sm md:text-base">
        An Online Lecture Scheduling system
      </p>
      <Button
        size={"lg"}
        className="w-fit text-base bg-purple-400/40  hover:bg-purple-400/70  text-purple-700 transition-all duration-200 ease-in-out md:text-lg"
        onClick={() => navigate("/login")}
      >
        Login <LogInIcon className="w-4 h-4 ml-2" strokeWidth={2.5} />
      </Button>
    </section>
  );
};

export default HomePage;
