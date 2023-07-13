import Link from "next/link";
import { useDisconnect } from "wagmi"

export default function UserOption({ handleCloseMenu, title, link=null, isDisconnect=false }) {
    const { disconnect } = useDisconnect();

    const handleClick = () => {
        isDisconnect ? disconnect() : handleCloseMenu()
    }

    return isDisconnect ? (
        <h1 onClick={handleClick} className={`cursor-pointer w-full text-center py-[10px] text-md font-medium text-red-500 bg-white`}>{title}</h1>
    ) : (
        <Link href={link} >
            <h1 onClick={handleClick} className={`cursor-pointer w-full text-center py-[10px] text-md font-medium text-gray-800 bg-white`}>{title}</h1>
        </Link>
    )
}