"use client";
import { useState } from "react";

export default function LanguageToggle() {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <div
      onClick={() => setIsEnglish(!isEnglish)}
      className="relative w-16 h-8 bg-gray-300 rounded-full hidden sm:flex items-center cursor-pointer p-1 transition-all duration-300"
    >
      {/* EN / IN Text inside the switch */}
      <span
        className={`absolute left-2 text-sm font-semibold transition-all duration-300 ${
          isEnglish ? "text-white" : "text-black"
        }`}
      >
        EN
      </span>
      <span
        className={`absolute right-2 text-sm font-semibold transition-all duration-300 ${
          !isEnglish ? "text-white" : "text-black"
        }`}
      >
        IN
      </span>

      {/* Toggle Circle */}
      <div
        className={`w-6 h-6 bg-white rounded-full transition-all duration-300 text-sm flex justify-center items-center text-black ${
          isEnglish ? "translate-x-0" : "translate-x-8"
        }`}
      >
        {isEnglish ? "EN" : "IN"}
      </div>
    </div>
  );
}
