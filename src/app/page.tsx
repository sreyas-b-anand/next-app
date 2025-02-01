import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import bg from "../../public/bg.jpeg";
import Welcome from "@/components/Welcome";
import Explore from "@/components/Explore";
import Connect from "@/components/Connect";
export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex-wrap bg-gray-100 p-3 px-4 sm:px-8">
        <Navbar />
        <Image
          className="w-full h-[750px] py-4 mt-2 rounded-[60px] "
          src={bg}
          alt="bg"
        />
      </div>
      <div className="absolute z-50 h-[300px] w-screen flex items-center justify-start px-[60px]  top-[150px] ">
        <Welcome />
      </div>
      <div className="w-full absolute z-50 top-[85%] p-5  hidden [@media(min-width:680px)]:flex">
        <div className="w-full max-w-[1200px] mx-auto h-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-6 md:px-10 lg:px-24 gap-8">
          <Connect />
          <Explore />
        </div>
      </div>
    </>
  );
}
