import formatNumber from "../lib/formatNumber";
import WalletIcon from '../components/icons/Wallet';
import { useRef, useState } from "react";
import UserOption from "./UserOption";

export default function WalletConnected({ account }) {
    const { address, balanceFormatted } = account;

    const containerRef = useRef<any>();
    const [menuOpen, setMenuOpen] = useState(false);
    const [listening, setListening] = useState<boolean>(false);


    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            handleCloseMenu();
        }
    };

    const handleOpenMenu = () => {
        setMenuOpen(true);

        if (!listening) {
            setListening(true);
            document.addEventListener('mousedown', handleClickOutside);
        }
    } 

    const handleCloseMenu = () => {
        setMenuOpen(false);
        setListening(false);
        document.removeEventListener('mousedown', handleClickOutside);
    }

    return (
        <div ref={containerRef} className='relative h-full w-full'  >
            <div onClick={handleOpenMenu} className="relative flex flex-inline justify-center items-center gap-2 h-full w-full">
                <h1 className="hidden md:flex" >
                    {formatNumber(balanceFormatted, true)} ETH
                </h1>
                <div className='relative w-[22px]'>
                    <WalletIcon />
                </div>
            </div>
            {menuOpen && <div className="absolute top-[45px] right-[-2px] w-[150px] border-2 rounded-xl overflow-hidden flex flex-col bg-gray-200 gap-0.5 cursor-default">
                <UserOption handleCloseMenu={handleCloseMenu} title='Create Listing' link={`/createListing/${address}`} />
                <UserOption handleCloseMenu={handleCloseMenu} title='Listings' link={`/user/${address}/listings`} />
                <UserOption handleCloseMenu={handleCloseMenu} title='Sales' link={`/user/${address}/sales`} />
                <UserOption handleCloseMenu={handleCloseMenu} title='Disconnect' isDisconnect={true} />
            </div>}
        </div>
    )
}