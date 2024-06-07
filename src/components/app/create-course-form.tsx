import FormButton from "@/components/form-button";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateCourseMutation } from "@/features/api/courseApiSlice";
import { CreateCourseSchema } from "@/schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const CreateCourseForm = () => {
  const form = useForm<z.infer<typeof CreateCourseSchema>>({
    resolver: zodResolver(CreateCourseSchema),
    defaultValues: {
      name: "",
      level: "easy",
      description: "",
    },
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<string | ArrayBuffer | null | undefined>(
    null
  );

  const [createCourse, { isLoading }] = useCreateCourseMutation();

  const onSubmit = async () => {
    const formData = new FormData();
    if (fileRef.current?.files) {
      formData.append("image", fileRef.current?.files[0]);
      console.log(fileRef.current?.files[0]!);
    }
    formData.append("name", form.getValues("name"));
    formData.append("level", form.getValues("level"));
    formData.append("description", form.getValues("description"));

    try {
      const response = await createCourse(formData).unwrap();
      console.log({ response });
      if (response.success) {
        form.reset();
        setFile("");
        if (fileRef.current?.value) {
          fileRef.current.value = "";
        }
        setSuccess(response.message);
      }
    } catch (error: any) {
      console.log(error);
      setError(error.data.message);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSuccess("");
    const reader = new FileReader();
    if (!e.target.files) {
      setError("Please upload a file");
      return;
    }
    if (e.target.files[0].size > 500000) {
      setError("File size exceeds 500KB");
      return;
    }
    setError("");
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (readerEvent) => {
      setFile(readerEvent.target?.result);
    };
  };

  return (
    <div className="w-full flex justify-center">
      <Card className="w-full max-w-[500px]">
        <CardHeader>
          <CardTitle>
            <p className="text-neutral-800 font-bold text-2xl flex items-baseline gap-2">
              <span>Create Course</span> <PlusCircle className="w-5 h-5" />
            </p>
          </CardTitle>
          <CardDescription>
            Create and assign a course lecture to an Instrutor
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form id="form" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Full stack development"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="description"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Provide a brief description of the course"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="level"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Difficulty Level</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select the difficulty level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="easy">Easy</SelectItem>
                          <SelectItem value="medum">Medium</SelectItem>
                          <SelectItem value="hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="">
                  <FormLabel htmlFor="files">Select files</FormLabel>
                  <Input
                    id="files"
                    ref={fileRef}
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </div>
                {file && (
                  <div className="w-52 object-contain">
                    <img
                      src={file as string}
                      alt="image"
                      className="object-contain"
                    />
                  </div>
                )}
                {error && <FormError error={error} />}
                {success && <FormSuccess success={success} />}
                <FormButton isPending={isLoading} label="Create Course" />
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateCourseForm;
