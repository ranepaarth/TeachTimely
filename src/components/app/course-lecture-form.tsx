"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUpdateCourseMutation } from "@/features/api/courseApiSlice";
import { Course } from "@/features/coursesSlice";
import { selectInstructors, User } from "@/features/instructorsSlice";
import { cn } from "@/lib/utils";
import { UpdateCourseSchema } from "@/schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as z from "zod";
import FormButton from "../form-button";
import FormSuccess from "../form-success";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import FormError from "../form-error";

export function CourseLectureForm({
  course,
}: {
  course: Course;
}) {
  const form = useForm<z.infer<typeof UpdateCourseSchema>>({
    resolver: zodResolver(UpdateCourseSchema),
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const instructors = useSelector(selectInstructors);
  const [updateCourse, { isLoading }] = useUpdateCourseMutation();

  const onSubmit = async (values: z.infer<typeof UpdateCourseSchema>) => {
    setSuccess("")
    setError("")
    try {
      const response = await updateCourse({
        courseId: course._id,
        data: values,
      }).unwrap();

      if(response.success){
        setSuccess(response.message)
      }
      console.log(response);
    } catch (error:any) {
      console.log(error);
      setError(error.data.message)
    }
  };

  return (
    <div>
      <CardHeader className="text-2xl font-bold">
        <CardTitle className="font-bold border-b-4 pb-2 border-b-purple-500 w-fit pr-2">
          {course.name}
        </CardTitle>
        <CardDescription className="font-normal">
          Select the instructor who will be conducting the lecture on the
          selected date.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="instructorId"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assign Instructor</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-4/5">
                        <SelectValue placeholder="Select Instructor" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {instructors.map((instructor: User) => (
                        <SelectItem value={instructor.id} key={instructor.id}>
                          {instructor.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of lecture</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date: Date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Lecture Date.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {success && <FormSuccess success={success} />}
            {error && <FormError error={error} />}
            <FormButton label="Submit" isPending={isLoading} />
          </form>
        </Form>
      </CardContent>
    </div>
  );
}
