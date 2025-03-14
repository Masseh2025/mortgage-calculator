import ClearAll from "@/components/ClearAll";
import InterestRate from "@/components/InterestRate";
import MortgageAmount from "@/components/MortgageAmount";
import MortgageTerm from "@/components/MortgageTerm";
import InterestType from "@/components/MortgageType";

export default function CalculateForm() {
  return (
    <div className="bg-white p-4">
      <form action="">
        <h1 className="font-bold text-2xl mb-2">Morgage Calculator</h1>
        <ClearAll />
        <MortgageAmount />
        <MortgageTerm />
        <InterestRate />
        <InterestType />
      </form>
    </div>
  );
}
