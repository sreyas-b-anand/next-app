import { ArrowRight } from "lucide-react";
const Explore = () => {
  return (
    <>
      <div
        style={{
          clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%, 0% 38%)",
        }}
        className=" rounded-[15px] bg-white h-[300px] w-80 p-5 flex items-center  gap-3 justify-between flex-col"
      >
        <div className="w-full flex items-center justify-end ">
          <div className="p-3 rounded-full border hover:cursor-pointer">
            <ArrowRight />
          </div>
        </div>
        <div>
          <p className="border-b font-normal text-xl py-8 px-2">
            Explore our curated list of must vist destinations around the globe
          </p>
          <div className="flex items-center justify-between p-4">
            <p>{"(FIRST)"}</p>
            <p>{"(PRESENT)"}</p>
            <p>01</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
