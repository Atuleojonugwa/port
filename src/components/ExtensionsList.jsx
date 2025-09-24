export default function ExtensionList({
  image,
  title,
  description,
  isActive,
  onToggle,
  onRemove,
  darkMode,
}) {
  return (
    <>
      <div
        className={`p-5 rounded-2xl flex flex-col border-2 ${
          darkMode
            ? "bg-[#1F2535] border-[#52596F]"
            : "bg-[#FCFDFF] border-[#E5E7EB] shadow-[0_4px_20px_hsl(0,0%,78%,0.3)] "
        }`}
      >
        <div className="flex gap-4 ">
          <div className="">
            <img className="text-[10px]" src={image} alt={title} />
          </div>
          <div className="flex flex-col">
            <h2
              className={`mt-0.5 text-base font-bold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-sm font-normal mt-2.5 ${
                darkMode ? "text-[#9b9d9e]" : "text-[#4B5563]"
              }`}
            >
              {description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-6">
          <button
            onClick={onRemove}
            className={`px-3.5 py-1 border-2 rounded-[50px] cursor-pointer ${
              darkMode
                ? "text-white border-[#52596F]"
                : "text-black border-[#D1D5DB]"
            }`}
          >
            Remove
          </button>
          <div className="flex items-center gap-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isActive}
                onChange={onToggle}
                className="sr-only peer"
              />
              <div
                className={`w-11 h-5 rounded-full transition-colors duration-300 ${
                  isActive
                    ? "bg-[#C7231A]"
                    : darkMode
                    ? "bg-gray-600"
                    : "bg-gray-300"
                }`}
              ></div>
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
