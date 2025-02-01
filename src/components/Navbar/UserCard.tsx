import Image from "next/image"
import Burger from "../../../public/Burger.svg";
import User from '../../../public/User.svg'
const UserCard = () => {
  return (
    <div className="border bg-inherit w-16 rounded-full flex items center justify-center gap-2 px-3 py-1 hover:cursor-pointer">
        <Image src={Burger} alt="b" width={25} height={25}/>
      <Image width={25} height={25} alt="user" src={User}/>
    </div>
  )
}

export default UserCard
