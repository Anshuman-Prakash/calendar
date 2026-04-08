import { ymd, today } from "../../utils/dateUtils";

export default function DateCell({
  day, month, year, theme,
  rangeStart, rangeEnd, hoveredDate,
  onSelect, onHover
}) {
  if (!day) return <div />;

  const date = new Date(year, month, day);
  date.setHours(0,0,0,0);

  const isToday = ymd(date) === ymd(today);
  const isStart = rangeStart && ymd(date) === ymd(rangeStart);
  const isEnd = rangeEnd && ymd(date) === ymd(rangeEnd);

  return (
    <button
      onClick={() => onSelect(date)}
      onMouseEnter={() => onHover(date)}
      onMouseLeave={() => onHover(null)}
      className={`
        h-10 w-full rounded-md text-sm transition
        ${isStart || isEnd ? "bg-blue-500 text-white" : ""}
        ${isToday ? "border border-blue-400" : ""}
        hover:bg-blue-200
      `}
    >
      {day}
    </button>
  );
}