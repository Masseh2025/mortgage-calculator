"use client";

export default function MortgageTerm() {
  return (
    <div className="flex flex-col">
      <label htmlFor="term" className="text-slate-700 font-medium">
        Mortgage Term
      </label>
      <div className="flex items-center group">
        <input
          className="border-slate-500 p-2 border-1 border-r-0 rounded-l-sm text-slate-900 font-bold group-hover:border-lime w-full"
          type="number"
          name="term"
          id="term"
        />
        <div className="border-slate-500 p-2 bg-slate-100 border-1 border-l-0 rounded-r-sm  flex justify-center group-hover:border-lime group-hover:bg-lime ">
          Years
        </div>
      </div>
    </div>
  );
}
