import { Course } from "@/features/coursesSlice";
import CourseCard from "./course-card";

const InstructorCourseCard = ({ course }: { course: Course }) => {

    return (
    <CourseCard course={course} showLectures={true} showFooter={false} showEditIcon={false}/>
  );
};

export default InstructorCourseCard;
