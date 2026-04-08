import heroImg from "./Nature-Wallpaper-01145.jpg";

export default function HeroSection({ curMonth, curYear, navigate }) {
  return (
    <div className="relative rounded-2xl overflow-hidden h-[420px]">

      {/* Image */}
      <img
        src={heroImg}
        alt="calendar hero"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6">
        <h1 className="text-4xl font-bold text-white">
          {new Date(curYear, curMonth).toLocaleString("default", {
            month: "long",
          })}
        </h1>

        <p className="text-gray-300">{curYear}</p>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => navigate("prev")}
            className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
            >
            ← Prev
            </button>

            <button
            onClick={() => navigate("next")}
            className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
            >
            Next →
            </button>
        </div>
      </div>
    </div>
  );
}