import SingleCourse from "@/components/app/single-course";
import { Course, getCourses } from "@/features/coursesSlice";
import { useSelector } from "react-redux";

const CoursesPage = () => {
 const courses = useSelector(getCourses)
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-8">
      {courses?.map((course: Course) => (
        <SingleCourse course={course} key={course._id} />
      ))}
    </section>
  );
};

export default CoursesPage;
