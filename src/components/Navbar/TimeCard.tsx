"use client";

import { useFetch } from "@/hooks/useFetch";
import Loader from "../../Animation/Loader";
const TimeCard = () => {
  const { time, isLoading, error } = useFetch();
  return (
    <>
      {isLoading && (
        <span>
          <Loader />
        </span>
      )}
      {time ? (
        <div className="hidden sm:flex items-center justify-center gap-3 flex-wrap w-fit p-2">
          <p className="font-semibold">{time}</p>
          <p className="font-semibold">London</p>
        </div>
      ) : (
        <p className="hidden sm:block">{error}</p>
      )}
    </>
  );
};

export default TimeCard;
