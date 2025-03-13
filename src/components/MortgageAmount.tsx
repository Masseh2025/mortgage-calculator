"use client";

export default function MortgageAmount() {
  return (
    <div className="flex flex-col">
      <label htmlFor="amount" className="text-slate-700 font-medium">
        Mortgage amount
      </label>
      <div className="flex items-center group">
        <div className="border-slate-500 p-1 bg-slate-100 border-1 border-r-0 rounded-l-sm w-8 flex justify-center group-hover:border-lime group-hover:bg-lime ">
          $
        </div>
        <input
          className="border-slate-500 p-1 border-1 border-l-0 rounded-r-sm text-slate-900 font-bold group-hover:border-lime"
          type="text"
          name="amount"
          id="amount"
        />
      </div>
    </div>
  );
}
