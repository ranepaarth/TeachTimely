import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Course } from "@/features/coursesSlice";
import { EditIcon } from "lucide-react";
import moment from "moment";
import { CourseLectureForm } from "./course-lecture-form";

type CourseCardsProps = {
  course: Course;
};

const className = {
  intermediate: "bg-amber-200 text-amber-500",
  beginner: "bg-emerald-200  text-emerald-600 ",
  advance: "bg-red-200 text-red-600",
};

const CourseCard = ({ course }: CourseCardsProps) => {
  return (
    <Dialog>
      <Card className="shadow-sm group relative">
        <DialogTrigger className="absolute  top-2 right-2 text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
          <EditIcon className="w-5 h-5" />
        </DialogTrigger>
        <span
          className={`absolute capitalize px-2 py-1 rounded-tl-lg ${
            className[course.level]
          } text-xs`}
        >
          {course.level}
        </span>
        <DialogContent>
          <CourseLectureForm course={course} />
        </DialogContent>
        <CardContent className="bg-neutral-100 p-4 flex justify-center rounded-t-lg">
          <div>
            <img
              src={course.image}
              alt={course.name}
              className="w-60 object-contain aspect-video"
            />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="font-bold text-neutral-800">
            {course.name}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {course.description}
          </CardDescription>
        </CardHeader>

        <CardFooter className="mt-auto flex justify-between text-xs">
          <p className="font-normal text-neutral-400">
            Course created: {moment(course.createdAt).fromNow()}
          </p>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default CourseCard;
