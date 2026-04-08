export default function DateCell({
  day,
  isStart,
  isEnd,
  isInRange,
  isPreviewRange,
  isToday,
  onClick,
  onHover,
  onLeave,
}) {
  if (!day) return <div />;

  return (
    <button
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`
        h-10 w-full flex items-center justify-center
        text-sm rounded-lg transition-all duration-200

        hover:scale-105

        ${isStart || isEnd
          ? "bg-blue-500 text-white shadow-md scale-105"
          : ""}

        ${isInRange
          ? "bg-blue-200 text-black"
          : ""}

        ${isPreviewRange
          ? "bg-blue-100"
          : ""}

        ${isToday && !isStart && !isEnd
          ? "border-2 border-blue-500 font-bold text-blue-600"
          : ""}

        ${!isStart && !isEnd && !isInRange && !isPreviewRange && !isToday
          ? "text-gray-800 hover:bg-gray-200"
          : ""}
      `}
    >
      {day}
    </button>
  );
}