import { useGetAllInstructorsQuery } from "@/features/api/instructorApiSlice";
import { User } from "@/features/instructorsSlice";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminInstructors = () => {
  const { data: instructors } = useGetAllInstructorsQuery(null);
  return (
    <div>
      <Table>
        <TableCaption>A list of active instructors.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-cen">Email</TableHead>
            <TableHead>Name</TableHead>
            {/* <TableHead className="text-right">Amount</TableHead> */}
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
                {/* <TableCell className="text-right">$250.00</TableCell> */}
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
