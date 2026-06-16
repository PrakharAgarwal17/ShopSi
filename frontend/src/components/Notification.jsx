import { CheckCircle } from "lucide-react";


export function SuccessNotifications() {
  return (
    <div className="fixed top-5 right-5 flex items-center gap-3 px-5 py-4  border border-green-700 text-black rounded-xl shadow-xl animate-in slide-in-from-right duration-300">
      <CheckCircle className="text-black" size={22} />
      
      <div>
        <h3 className="font-semibold">Success</h3>
        <p className="text-sm text-zinc-400">
          successfully.
        </p>
      </div>
    </div>
  );
}