import { useState, useEffect } from "react";
import { ymd } from "../../utils/dateUtils";
import toast from "react-hot-toast";

export default function NotesPanel({
  theme, rangeStart, rangeEnd, notes, setNotes
}) {
  const key = rangeStart ? ymd(rangeStart) : "general";

  const [val, setVal] = useState("");

  useEffect(() => {
    setVal(notes[key] || "");
  }, [key, notes]);

  const save = () => {
    const updated = { ...notes, [key]: val };
    setNotes(updated);
    localStorage.setItem("wcal_notes", JSON.stringify(updated));
    toast.success("Note Saved ✅");
  };

  return (
    <div className="flex flex-col gap-2">
      <textarea
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Save your dates..."
        className="w-full p-3 rounded-lg bg-slate-100 text-black border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={save}
        className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg mt-2">
        Save
      </button>
    </div>
  );
}