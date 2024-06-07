import { useGetAllInstructorsQuery } from "@/features/api/instructorApiSlice";
import { Lecture, User } from "@/features/instructorsSlice";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";

const LectureSchedule = ({ lectures }: { lectures: Lecture[] }) => {
  return (
    <Select>
      <SelectTrigger>View Schedule</SelectTrigger>
      <SelectContent>
        {lectures.map((lecture) => (
          <SelectItem>
            {moment(lecture.date).format("MMMM Do, YYYY")}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const AdminInstructors = () => {
  const { data: instructors } = useGetAllInstructorsQuery(null);
  return (
    <div>
      <div></div>
      <Table>
        <TableCaption>A list of active instructors.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-cen">Email</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-left">Lecture Dates</TableHead>
            <TableHead className="text-right">Id</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {instructors?.map((instructor: User) => {
            return (
              <TableRow>
                <TableCell className="font-medium">
                  {instructor.email}
                </TableCell>
                <TableCell>{instructor.name}</TableCell>
                <TableCell className="text-left">
                  {instructor.lectures.length > 0 ? (
                    <LectureSchedule lectures={instructor.lectures} />
                  ) : (
                    "No Lectures"
                  )}
                </TableCell>
                <TableCell className="text-right">{instructor.id}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminInstructors;
