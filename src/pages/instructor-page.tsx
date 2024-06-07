import InstructorCourseCard from "@/components/app/instructor-course-card";
import { useGetInstructorCoursesQuery } from "@/features/api/instructorApiSlice";
import { Course } from "@/features/coursesSlice";
import { Lecture } from "@/features/instructorsSlice";
import { selectUser, User } from "@/features/userSlice";
import { useSelector } from "react-redux";

export type InstructorCourse = {
  courseName: string;
  thumbnail: string;
  level: string;
  description: string;
  lectures: Lecture[];
};

const InstructorPage = () => {
  const user = useSelector(selectUser) as User;
  const { data: courses } = useGetInstructorCoursesQuery(null);

  return (
    <div className="w-full max-w-screen-xl">
      <h3 className="text-4xl font-extrabold text-neutral-800 border-b-4 border-purple-500 w-fit pb-2">
        Courses 📕
      </h3>
      <p className="text-neutral-400 font-medium my-2">Welcome {user?.name}</p>
      <div className="text-lg font-semibold text-neutral-700">
        Instructor, here you can view your scheduled lectures for the courses.
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-4 gap-4 p-8">
        {courses?.map((course: Course) => (
          <InstructorCourseCard course={course} key={course._id} />
        ))}
      </section>
    </div>
  );
};

export default InstructorPage;
