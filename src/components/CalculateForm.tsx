"use client";

import { formSchema, FormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { MouseEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function CalculateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  const onReset = (e: MouseEvent) => {
    e.preventDefault();
    reset();
  };

  return (
    <div className="bg-white">
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <h1 className="font-bold text-2xl mb-2">Morgage Calculator</h1>
        <button
          onClick={(e) => onReset(e)}
          className="underline text-slate-700 font-medium mb-6"
        >
          Clear all
        </button>
        <div className="flex flex-col mb-6">
          <label htmlFor="amount" className="text-slate-700 font-medium mb-3">
            Mortgage Amount
          </label>
          <div className="flex items-center group">
            <div className="border-slate-500 p-2 bg-slate-100 border-1 border-r-0 rounded-l-sm w-8 flex justify-center group-focus-within:border-lime group-focus-within:bg-lime group-hover:border-lime group-hover:bg-lime font-medium">
              $
            </div>
            <input
              className="border-slate-500 p-2 border-1 border-l-0 rounded-r-sm text-slate-900 font-bold group-focus-within:border-lime group-hover:border-lime w-full"
              {...register("amount")}
              type="number"
              name="amount"
              id="amount"
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="term" className="text-slate-700 font-medium mb-3">
            Mortgage Term
          </label>
          <div className="flex items-center group">
            <input
              className="border-slate-500 p-2 border-1 border-r-0 rounded-l-sm text-slate-900 font-bold group-focus-within:border-lime group-hover:border-lime w-full"
              {...register("term")}
              type="number"
              name="term"
              id="term"
            />
            <div className="border-slate-500 p-2 bg-slate-100 border-1 border-l-0 rounded-r-sm  flex justify-center group-focus-within:border-lime group-focus-within:bg-lime group-hover:border-lime group-hover:bg-lime transition-colors font-medium">
              Years
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="rate" className="text-slate-700 font-medium mb-3">
            Interest Rates
          </label>
          <div className="flex items-center group">
            <input
              className="border-slate-500 p-2 border-1 border-r-0 rounded-l-sm text-slate-900 font-bold group-focus-within:border-lime group-hover:border-lime w-full"
              {...register("rate")}
              type="number"
              name="rate"
              id="rate"
            />
            <div className="border-slate-500 p-2 bg-slate-100 border-1 border-l-0 rounded-r-sm w-8  flex justify-center group-focus-within:border-lime group-focus-within:bg-lime group-hover:border-lime group-hover:bg-lime transition-colors font-medium">
              %
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <h2 className="text-slate-700 font-medium mb-3">Mortgage Type</h2>

          <label
            className="w-full p-2 border-1 border-slate-500 rounded-sm has-checked:bg-lime/30 focus-within:border-lime hover:border-lime mb-3 cursor-pointer font-bold"
            htmlFor="repayment"
          >
            <input
              className="checked:bg-lime mr-2"
              {...register("type")}
              name="type"
              type="radio"
              value="repayment"
              id="repayment"
            />
            Repayment
          </label>
          <label
            className="w-full p-2 border-1 border-slate-500 rounded-sm has-checked:bg-lime/30 focus-within:border-lime hover:border-lime cursor-pointer font-bold"
            htmlFor="interest-only"
          >
            <input
              className="checked:bg-lime mr-2"
              {...register("type")}
              name="type"
              type="radio"
              value="interest-only"
              id="interest-only"
            />
            Interest only
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="bg-slate-900 p-4">
        <h2 className="font-semibold">Results</h2>
      </div>
    </div>
  );
}
