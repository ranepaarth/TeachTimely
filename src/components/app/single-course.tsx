import { Course } from "@/features/coursesSlice";
import CourseCard from "./course-card";

const SingleCourse = ({ course }: { course: Course }) => {
  return <CourseCard course={course} />;
};

export default SingleCourse;
