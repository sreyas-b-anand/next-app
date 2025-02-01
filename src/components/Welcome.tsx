import { ArrowUpRight } from "lucide-react";
const Welcome = () => {
  return (
    <div className="absolute z-30 text-white flex items-start gap-[120px] justify-start flex-wrap">
      
      <div id="lorem-ipsum-text" className="border rounded-full px-4  my-2 hidden sm:block hover:cursor-pointer">
        lorem ipsum
      </div>

      <div className="flex items-start gap-7 justify-start flex-col">
        <p className="text-6xl  flex flex-wrap items-center justify-center flex-row w-full text-wrap">
          Explore the <br />
          world with us
        </p>

        <div className="flex items-center justify-start bg-white rounded-full p-1 w-[120px]">
          <button className="text-black flex items-center justify-center gap-3 px-3">
            Learn more
            <span className="bg-purple-950 p-2 rounded-full ">
            <ArrowUpRight color="white"  />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
