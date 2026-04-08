import { daysInMonth, startDow } from "../../utils/dateUtils";
import DateCell from "./DateCell";

export default function CalendarGrid({
  year,
  month,
  rangeStart,
  rangeEnd,
  hovered,
  setHovered,
  handleSelect,
}) {
  const days = daysInMonth(year, month);
  const offset = startDow(year, month);

  const cells = [
    ...Array(offset).fill(null),
    ...Array(days).fill(0).map((_, i) => i + 1),
  ];

  return (
    <div className="grid grid-cols-7 gap-2 text-center">
      {cells.map((day, i) => {
        if (!day) return <div key={i} />;

        const date = new Date(year, month, day);
        date.setHours(0, 0, 0, 0);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const isToday =
          date.getTime() === today.getTime();

        const isStart =
          rangeStart && date.getTime() === rangeStart.getTime();

        const isEnd =
          rangeEnd && date.getTime() === rangeEnd.getTime();

        const isInRange =
          rangeStart &&
          rangeEnd &&
          date > rangeStart &&
          date < rangeEnd;

        const isPreviewRange =
          rangeStart &&
          !rangeEnd &&
          hovered &&
          date > rangeStart &&
          date <= hovered;

        return (
          <DateCell
            key={i}
            day={day}
            isStart={isStart}
            isEnd={isEnd}
            isInRange={isInRange}
            isPreviewRange={isPreviewRange}
            isToday={isToday}   // ✅ ADD THIS LINE
            onClick={() => handleSelect(date)}
            onHover={() => setHovered(date)}
            onLeave={() => setHovered(null)}
          />
        );
      })}
    </div>
  );
}