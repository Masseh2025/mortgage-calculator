"use client";

export default function InterestType() {
  return (
    <div className="flex flex-col mb-6">
      <h2 className="text-slate-700 font-medium mb-3">Mortgage Type</h2>

      <label
        className="w-full p-2 border-1 border-slate-500 rounded-sm has-checked:bg-lime/30 focus-within:border-lime hover:border-lime mb-3 cursor-pointer font-bold"
        htmlFor="repayment"
      >
        <input
          className="checked:bg-lime mr-2"
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
          name="type"
          type="radio"
          value="interest-only"
          id="interest-only"
        />
        Interest only
      </label>
    </div>
  );
}
