"use client";

export default function InterestRate() {
  return (
    <div className="flex flex-col mb-6">
      <label htmlFor="rate" className="text-slate-700 font-medium mb-3">
        Interest Rates
      </label>
      <div className="flex items-center group">
        <input
          className="border-slate-500 p-2 border-1 border-r-0 rounded-l-sm text-slate-900 font-bold group-focus-within:border-lime group-hover:border-lime w-full"
          type="number"
          name="rate"
          id="rate"
        />
        <div className="border-slate-500 p-2 bg-slate-100 border-1 border-l-0 rounded-r-sm w-8  flex justify-center group-focus-within:border-lime group-focus-within:bg-lime group-hover:border-lime group-hover:bg-lime transition-colors font-medium">
          %
        </div>
      </div>
    </div>
  );
}
