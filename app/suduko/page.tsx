"use client";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { boolean, number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const formSchema = z.object({
  e00: z.number(),
  e01: z.number(),
  e02: z.number(),
  e10: z.number(),
  e11: z.number(),
  e12: z.number(),
  e20: z.number(),
  e21: z.number(),
  e22: z.number(),
});
export default function Home() {
  const [values, setValues] = useState({
    e00: 1,
    e01: 0,
    e02: 0,
    e10: 0,
    e11: 3,
    e12: 0,
    e20: 0,
    e21: 0,
    e22: 0,
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      e00: 1,
      e01: 0,
      e02: 0,
      e10: 0,
      e11: 3,
      e12: 0,
      e20: 0,
      e21: 0,
      e22: 0,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setValues(data);
    console.log(values);
    // let matrix: number[][] = [[], [], []]; // Initialize each sub-array
    // //matrix was not initialized properly
    // // let matrix = new Array<number[]>();
    // matrix[0][0] = data.e00;
    // matrix[0][1] = data.e01;
    // matrix[0][2] = data.e02;
    // matrix[1][0] = data.e10;
    // matrix[1][1] = data.e11;
    // matrix[1][2] = data.e12;
    // matrix[2][0] = data.e20;
    // matrix[2][1] = data.e21;
    // matrix[2][2] = data.e22;
    // let flag = true;
    // for (let i = 0; i < 3; i++) {
    //   for (let j = 0; j < 3; j++) {
    //     let k = 0;
    //     while (k < 2) {
    //       if (matrix[i][j] === matrix[i][k]) {
    //         flag = false;
    //       }
    //       if (matrix[i][j] === matrix[k][j]) {
    //         flag = false;
    //       }
    //       k++;
    //     }
    //   }
    // }
    // console.log(flag);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Card className="p-5">
          Building a 3x3 Suduko
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 p-5"
            >
              <div className="grid grid-cols-3">
                {" "}
                <FormField
                  control={form.control}
                  name="e00"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="e01"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="e02"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="e10"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="e11"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="e12"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="e20"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="e21"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="e22"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit">Check</Button>
            </form>
          </Form>
        </Card>
      </div>
    </main>
  );
}
