"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { bookSchema } from "@/lib/validations";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/FileUpload";

interface Props extends Partial<Book> {
  type?: "create | 'update";
}

const BookForm = ({ type, ...book }: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      description: "",
      author: "",
      genre: "",
      rating: 1,
      totalCopies: 1,
      coverUrl: "",
      coverColor: "",
      videoUrl: "",
      summary: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof bookSchema>) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name={"title"}
          render={({ field }) => (
            <FormItem className={"flex flex-col gap-1"}>
              <FormLabel className={"text-base font-normal text-dark-500"}>
                Book Title
              </FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder={"Book Title"}
                  {...field}
                  className={"book-form-input"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"author"}
          render={({ field }) => (
            <FormItem className={"flex flex-col gap-1"}>
              <FormLabel className={"text-base font-normal text-dark-500"}>
                Author
              </FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder={"Book Author"}
                  {...field}
                  className={"book-form-input"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"genre"}
          render={({ field }) => (
            <FormItem className={"flex flex-col gap-1"}>
              <FormLabel className={"text-base font-normal text-dark-500"}>
                Genre
              </FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder={"Book genre"}
                  {...field}
                  className={"book-form-input"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"rating"}
          render={({ field }) => (
            <FormItem className={"flex flex-col gap-1"}>
              <FormLabel className={"text-base font-normal text-dark-500"}>
                Rating
              </FormLabel>
              <FormControl>
                <Input
                  type={"number"}
                  min={1}
                  max={5}
                  placeholder={"Book rating"}
                  {...field}
                  className={"book-form-input"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"totalCopies"}
          render={({ field }) => (
            <FormItem className={"flex flex-col gap-1"}>
              <FormLabel className={"text-base font-normal text-dark-500"}>
                Total Copies
              </FormLabel>
              <FormControl>
                <Input
                  type={"number"}
                  min={1}
                  max={10000}
                  placeholder={"Total copies"}
                  {...field}
                  className={"book-form-input"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"coverUrl"}
          render={({ field }) => (
            <FormItem className={"flex flex-col gap-1"}>
              <FormLabel className={"text-base font-normal text-dark-500"}>
                Book Image
              </FormLabel>
              <FormControl>
                <FileUpload
                  type={"image"}
                  accept={"image/*"}
                  placeholder={"Upload a book cover"}
                  folder={"books/cover"}
                  variant={"light"}
                  onFileChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"coverColor"}
          render={({ field }) => (
            <FormItem className={"flex flex-col gap-1"}>
              <FormLabel className={"text-base font-normal text-dark-500"}>
                Primary color
              </FormLabel>
              <FormControl>{/*  color picker*/}</FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"description"}
          render={({ field }) => (
            <FormItem className={"flex flex-col gap-1"}>
              <FormLabel className={"text-base font-normal text-dark-500"}>
                Book Description
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={"Book description"}
                  {...field}
                  rows={10}
                  className={"book-form_input"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"videoUrl"}
          render={({ field }) => (
            <FormItem className={"flex flex-col gap-1"}>
              <FormLabel className={"text-base font-normal text-dark-500"}>
                Book Trailer
              </FormLabel>
              <FormControl>
                <FileUpload
                  type={"video"}
                  accept={"video/*"}
                  placeholder={"Upload a book trailer"}
                  folder={"books/videos"}
                  variant={"light"}
                  onFileChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={"summary"}
          render={({ field }) => (
            <FormItem className={"flex flex-col gap-1"}>
              <FormLabel className={"text-base font-normal text-dark-500"}>
                Book Summary
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={"Book summary"}
                  {...field}
                  rows={5}
                  className={"book-form_input"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className={"book-form_btn text-white"} type={"submit"}>
          Add book to library
        </Button>
      </form>
    </Form>
  );
};
export default BookForm;
