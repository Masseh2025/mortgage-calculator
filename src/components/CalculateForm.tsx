"use client";

import { formSchema, FormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { MouseEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Image from "next/image";
import calculatorImage from "../../public/assets/images/icon-calculator.svg";
import illustration from "../../public/assets/images/illustration-empty.svg";
import { cn } from "@/lib/cn";

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
    setData(data);
  };

  const onReset = (e: MouseEvent) => {
    e.preventDefault();
    reset();
  };

  const [data, setData] = useState<FieldValues>();
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
            <div
              className={cn(
                "border-slate-500 p-2 bg-slate-100 border-1 border-r-0 rounded-l-sm w-8 flex justify-center group-focus-within:border-lime group-focus-within:bg-lime group-hover:border-lime group-hover:bg-lime font-medium",
                { "bg-red text-white": errors.amount }
              )}
            >
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
          {errors.amount && (
            <p className="text-red">{`${errors.amount.message}`}</p>
          )}
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
            <div
              className={cn(
                "border-slate-500 p-2 bg-slate-100 border-1 border-l-0 rounded-r-sm  flex justify-center group-focus-within:border-lime group-focus-within:bg-lime group-hover:border-lime group-hover:bg-lime transition-colors font-medium",
                { "bg-red text-white": errors.term }
              )}
            >
              Years
            </div>
          </div>
          {errors.term && (
            <p className="text-red">{`${errors.term.message}`}</p>
          )}
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
            <div
              className={cn(
                "border-slate-500 p-2 bg-slate-100 border-1 border-l-0 rounded-r-sm w-8  flex justify-center group-focus-within:border-lime group-focus-within:bg-lime group-hover:border-lime group-hover:bg-lime transition-colors font-medium",
                { "bg-red text-white": errors.rate }
              )}
            >
              %
            </div>
          </div>
          {errors.rate && (
            <p className="text-red">{`${errors.rate.message}`}</p>
          )}
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
              defaultChecked
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
        <button
          disabled={isSubmitting}
          type="submit"
          className="flex bg-lime text-slate-900 py-2 px-4 hover:bg-lime/60 disabled:bg-lime/60 cursor-pointer font-bold rounded-full justify-center w-full"
        >
          <Image src={calculatorImage} width={24} height={24} alt="Calcultor" />
          Submit
        </button>
      </form>
      {!data && (
        <div className="bg-slate-900 p-4 flex flex-col items-center ">
          <Image
            className="mb-4"
            src={illustration}
            height={192}
            width={192}
            alt="calculator illustration"
          ></Image>
          <h2 className="font-semibold text-white text-2xl mb-4">
            Resutls shown here
          </h2>
          <p className="text-white text-center">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      )}
    </div>
  );
}
