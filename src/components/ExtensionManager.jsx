import { useState, useEffect } from "react";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import ExtensionList from "./ExtensionsList";
import { extensions } from "../Lib/extension";
import Logo from "./Logo";

function ExtensionManager() {
  const [activeExtensions, setActiveExtensions] = useState(extensions);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      // document.body.classList.add("dark");
    }
  }, []);

  function toggleDarkMode() {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      // if (newMode) {
      //   document.body.classList.add("dark");
      // } else {
      //   document.body.classList.remove("dark");
      // }
      // localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  }

  function showAll() {
    setActiveExtensions(extensions);
    setFilter("all");
  }

  function active() {
    setActiveExtensions(extensions.filter((ext) => ext.isActive));
    setFilter("active");
  }

  function inActive() {
    setActiveExtensions(extensions.filter((ext) => !ext.isActive));
    setFilter("inactive");
  }

  function toggleExtension(id) {
    setActiveExtensions((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  }

  function removeExtension(id) {
    setActiveExtensions((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <div className={`pt-8 extension-manager ${darkMode ? "dark" : "light"}`}>
      <nav
        className={`flex items-center mx-[100px]  justify-between 
                ${
                  darkMode
                    ? "bg-[#1F2535] text-white"
                    : "bg-[#FCFDFF] text-black shadow-[0_4px_20px_hsla(0,0%,78%,0.3)]"
                } 
                p-4 rounded-[20px]`}
      >
        <Logo darkMode={darkMode} />
        <button
          onClick={toggleDarkMode}
          className={`${
            darkMode ? "bg-[#2F354B]" : "bg-[#EEEEEE]"
          } p-2.5 rounded-[10px] cursor-pointer`}
        >
          <img
            src={darkMode ? sun : moon}
            alt={darkMode ? "Sun icon" : "Moon icon"}
          />
        </button>
      </nav>

      <div className="mt-14 mx-[100px] flex items-center justify-between">
        <h1
          className={`text-2xl font-semibold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Extensions List
        </h1>
        <div className="flex gap-3">
          <button
            onClick={showAll}
            className={`px-5 py-[5px] rounded-[30px] font-medium shadow-sm cursor-pointer ${
              filter === "all"
                ? darkMode
                  ? "bg-[#C7231A] text-white"
                  : "bg-[#C7231A] text-white"
                : darkMode
                ? "bg-[#2F354B] border-2 border-[#52596F] text-white"
                : "bg-[#FAFCFD] border-2 border-[#D1D5DB] text-black"
            }`}
          >
            All
          </button>

          <button
            onClick={active}
            className={`px-5 py-[5px] rounded-[30px] font-medium shadow-sm cursor-pointer ${
              filter === "active"
                ? darkMode
                  ? "bg-[#C7231A] text-white"
                  : "bg-[#C7231A] text-white"
                : darkMode
                ? "bg-[#2F354B] border-2 border-[#52596F] text-white"
                : "bg-[#FAFCFD] border-2 border-[#D1D5DB] text-black"
            }`}
          >
            Active
          </button>

          <button
            onClick={inActive}
            className={`px-5 py-[5px] rounded-[30px] font-medium shadow-sm cursor-pointer ${
              filter === "inactive"
                ? darkMode
                  ? "bg-[#C7231A] text-white"
                  : "bg-[#C7231A] text-white"
                : darkMode
                ? "bg-[#2F354B] border-2 border-[#52596F] text-white"
                : "bg-[#FAFCFD] border-2 border-[#D1D5DB] text-black"
            }`}
          >
            Inactive
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 mx-[100px] gap-3">
        {activeExtensions.map((extension) => (
          <ExtensionList
            key={extension.id}
            image={extension.logo}
            title={extension.name}
            description={extension.description}
            isActive={extension.isActive}
            onToggle={() => toggleExtension(extension.id)}
            onRemove={() => removeExtension(extension.id)}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
}

export default ExtensionManager;
