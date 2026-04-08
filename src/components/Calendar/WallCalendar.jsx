import { useState, useEffect } from "react";
import { today } from "../../utils/dateUtils";

import CalendarGrid from "./CalendarGrid";
import NotesPanel from "../Notes/NotesPanel";
import HeroSection from "./HeroSection";

export default function WallCalendar() {
  const [curYear, setCurYear] = useState(today.getFullYear());
  const [curMonth, setCurMonth] = useState(today.getMonth());

  const [rangeStart, setRangeStart] = useState(null);
  const [rangeEnd, setRangeEnd] = useState(null);
  const [hovered, setHovered] = useState(null);

  const [notes, setNotes] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wcal_notes") || "{}");
    setNotes(data);
  }, []);

  const navigate = (dir) => {
    if (dir === "next") {
      if (curMonth === 11) {
        setCurMonth(0);
        setCurYear((y) => y + 1);
      } else setCurMonth((m) => m + 1);
    } else {
      if (curMonth === 0) {
        setCurMonth(11);
        setCurYear((y) => y - 1);
      } else setCurMonth((m) => m - 1);
    }
  };

  const handleSelect = (date) => {
    if (!rangeStart || rangeEnd) {
      setRangeStart(date);
      setRangeEnd(null);
    } else {
      if (date < rangeStart) {
        setRangeStart(date);
      } else {
        setRangeEnd(date);
      }
    }
  };

  return (
  <div className="min-h-screen flex flex-col bg-gray-100 p-6">

    {/* MAIN CONTENT */}
    <div className="flex-grow flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">

        <HeroSection
          curMonth={curMonth}
          curYear={curYear}
          navigate={navigate}
        />

        <div className="bg-white p-4 rounded-xl shadow-lg">
          <CalendarGrid
            year={curYear}
            month={curMonth}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            hovered={hovered}
            setHovered={setHovered}
            handleSelect={handleSelect}
          />

          <div className="mt-4">
            <NotesPanel
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              notes={notes}
              setNotes={setNotes}
            />
          </div>
        </div>

      </div>
    </div>

    {/* FOOTER */}
    <footer className="text-center mt-6">
      <p className="text-xs text-gray-400 tracking-wide">
        Designed & Developed by
      </p>
      <p className="text-sm font-semibold text-gray-700 hover:text-blue-500 transition">
        Anshuman Prakash
      </p>
      <a
        href="https://github.com/Anshuman-Prakash/calendar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-blue-500 hover:underline block mt-1"
      >
        🔗 GitHub Profile
      </a>
    </footer>

  </div>
);
}