import { ArrowDown } from "lucide-react";
const Connect = () => {
  return (
    <div className=" h-fit w-fit p-3 ">
      <div className="absolute z-30">
      <div className="border backdrop-blur-md bg-transparent flex items-center justify-center text-white rounded-full absolute z-30 top-[1px] w-[80px] h-[80px]">
        Contact
      </div>
      <div className="border  bg-transparent text-white rounded-full w-[80px] h-[80px] flex items-center justify-center mt-[70px] hover:cursor-pointer">
        <ArrowDown />
      </div>
      </div>
    </div>
  );
};

export default Connect;
