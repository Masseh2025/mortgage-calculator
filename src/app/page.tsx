import Calculate from "@/app/_cardLayout/CalculateForm";
import CalculateResults from "./_cardLayout/CalculateResults";
import "./globals.css";

export default function Home() {
  return (
    <main className="h-screen bg-slate-100 flex justify-center">
      <div className="w-full">
        <Calculate />
        <CalculateResults />
      </div>
    </main>
  );
}
