import { Ban } from "lucide-react";
export function ErrorNotification () {
    return (
        <>
         <div className="fixed top-5 right-5 flex items-center gap-3 px-5 py-4  border border-red-700 text-black rounded-xl shadow-xl animate-in slide-in-from-right duration-300">
       <Ban className="text-black" size={22} />
      
      <div>
        <h3 className="font-semibold">Error</h3>
        <p className="text-sm text-zinc-400">
         Login unsuccessful.
        </p>
      </div>
    </div>
        </>
    )
}