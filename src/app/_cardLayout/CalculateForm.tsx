import ClearAll from "@/components/ClearAll";
import MortgageAmount from "@/components/MortgageAmount";

export default function CalculateForm() {
  return (
    <div className="bg-white p-4">
      <form action="">
        <h1 className="font-bold text-2xl">Morgage Calculator</h1>
        <ClearAll />
        <MortgageAmount />
      </form>
    </div>
  );
}
