import { daysInMonth, startDow } from "../../utils/dateUtils";
import DateCell from "./DateCell";

export default function CalendarGrid({
  year, month, theme,
  rangeStart, rangeEnd,
  hovered, setHovered,
  handleSelect
}) {
  const days = daysInMonth(year, month);
  const offset = startDow(year, month);

  const cells = [
    ...Array(offset).fill(null),
    ...Array(days).fill(0).map((_, i) => i + 1),
  ];

  return (
    <div className="grid grid-cols-7 gap-2 text-center">
      {cells.map((day, i) => (
        <DateCell
          key={i}
          day={day}
          month={month}
          year={year}
          theme={theme}
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
          hoveredDate={hovered}
          onSelect={handleSelect}
          onHover={setHovered}
        />
      ))}
    </div>
  );
}