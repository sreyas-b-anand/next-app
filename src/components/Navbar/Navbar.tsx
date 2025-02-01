import Image from "next/image";
import BookMark from "../../../public/Bookmark.svg";
import Cart from "../../../public/Cart.svg";
import TimeCard from "../Navbar/TimeCard";
import LanguageToggle from "../Navbar/ToggleButton";
import UserCard from "../Navbar/UserCard";

const Navbar = () => {
  
  return (
    <nav className="w-full h-16 flex items-center justify-between px-5 rounded-full bg-white">
      <div className="flex items-center justify-center gap-[150px] ">
      <h1 className="text-2xl font-bold ">trvvrat</h1>
      <TimeCard />
      </div>
      <div className="flex items-center justify-center gap-8 w-fit">
        <LanguageToggle/>
        <div className=" items-center justify-center gap-3  hidden sm:flex">
        <Image src={BookMark} alt="bm" height={22} width={22} />
        <Image src={Cart} alt="ct" height={22} width={22} />
        </div>
        <UserCard/>
      </div>
    </nav>
  );
};

export default Navbar;
