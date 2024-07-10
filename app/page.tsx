"use client";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import { z } from "zod";
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
function checkMatrix(matrix: unknown[][]) {
  // Check rows for duplicates
  for (let i = 0; i < 3; i++) {
    let rowSet = new Set();
    for (let j = 0; j < 3; j++) {
      if (rowSet.has(matrix[i][j])) return false;
      rowSet.add(matrix[i][j]);
    }
  }

  // Check columns for duplicates
  for (let j = 0; j < 3; j++) {
    let colSet = new Set();
    for (let i = 0; i < 3; i++) {
      if (colSet.has(matrix[i][j])) return false;
      colSet.add(matrix[i][j]);
    }
  }

  // If no duplicates found, matrix is valid
  return true;
}

// Example usage
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(checkMatrix(matrix)); // Should log true for this example
const MyForm = () => {
  const [display, setDisplay] = useState(false);
  const [flag, setFlag] = useState(true);
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

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setDisplay(false);
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    setDisplay(true);
    e.preventDefault();
    const data = formSchema.parse(values);
    console.log("Submitting values:", data);
    // Add your submission logic here
    let matrix: number[][] = [[], [], []]; // Initialize each sub-array
    //matrix was not initialized properly
    // let matrix = new Array<number[]>();
    matrix[0][0] = +values.e00;
    matrix[0][1] = +values.e01;
    matrix[0][2] = +values.e02;
    matrix[1][0] = +values.e10;
    matrix[1][1] = +values.e11;
    matrix[1][2] = +values.e12;
    matrix[2][0] = +values.e20;
    matrix[2][1] = +values.e21;
    matrix[2][2] = +values.e22;
    console.log(matrix);
    // let flag = true;
    console.log(checkMatrix(matrix));
    setFlag(checkMatrix(matrix)); // Should log true for this example    // for (let i = 0; i < 3; i++) {
    //   for (let j = 0; j < 3; j++) {
    //     let k = 0;
    //     while (k < 2) {
    //       if (matrix[i][j] === matrix[i][k]) {
    //         // console.log(matrix[i][k]);
    //         if (j === k) continue;
    //         else flag = false;
    //       }
    //       if (matrix[i][j] === matrix[k][j]) {
    //         if (i === k) continue;
    //         else flag = false;
    //       }
    //       k++;
    //       //   if (!flag)
    //     }
    //   }
    // }
    // console.log(flag);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="text-xl"> Play a 3x3 Suduko </div>
        <Card className="p-5 flex items-center justify-center">
          {" "}
          <form onSubmit={handleSubmit} className="p-10">
            {/* Example for one input field */}
            <div className="grid grid-cols-3 h-[200px] w-[200px]">
              {" "}
              <input
                name="e00"
                className="border-2 flex items-center justify-center text-center"
                value={values.e00}
                onChange={handleChange}
              />{" "}
              <input
                name="e01"
                className="border-2 flex items-center justify-center text-center"
                value={values.e01}
                onChange={handleChange}
              />
              <input
                name="e02"
                className="border-2 flex items-center justify-center text-center"
                value={values.e02}
                onChange={handleChange}
              />
              <input
                name="e10"
                className="border-2 flex items-center justify-center text-center"
                value={values.e10}
                onChange={handleChange}
              />
              <input
                name="e11"
                className="border-2 flex items-center justify-center text-center"
                value={values.e11}
                onChange={handleChange}
              />
              <input
                name="e12"
                className="border-2 flex items-center justify-center text-center"
                value={values.e12}
                onChange={handleChange}
              />
              <input
                name="e20"
                className="border-2 flex items-center justify-center text-center"
                value={values.e20}
                onChange={handleChange}
              />
              <input
                name="e21"
                className="border-2 flex items-center justify-center text-center"
                value={values.e21}
                onChange={handleChange}
              />
              <input
                name="e22"
                className="border-2 flex items-center justify-center text-center"
                value={values.e22}
                onChange={handleChange}
              />
            </div>
            {/* Add other input fields similarly */}
            <Button type="submit" className="mt-4">
              Check
            </Button>
          </form>
          {display ? (
            <CardFooter>
              {flag ? "Congo!!! Puzzle is solvable" : "Oops!! Try Again"}
            </CardFooter>
          ) : (
            <></>
          )}
        </Card>
        <Card className="p-4 flex flex-grow gap-2 mt-10">
          <CardTitle>Rules!!</CardTitle>
          <CardFooter>
            <ul>
              <li>Each row must contain all numbers from 1-3</li>
              <li>Each column must contain all numbers from 1-3</li>
              <li>Each sub-grid must contain all numbers from 1-3</li>
            </ul>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default MyForm;
