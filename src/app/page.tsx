import Calculate from "@/components/CalculateForm";
import "./globals.css";

export default function Home() {
  return (
    <main className="h-screen bg-slate-100 flex justify-center">
      <div className="w-full">
        <Calculate />
      </div>
    </main>
  );
}
