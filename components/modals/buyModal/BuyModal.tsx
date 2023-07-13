import { useState } from "react"
import BuyModalContext from "../../hooks/BuyModalContext";
import getCurrencyInfo from "../../../lib/getCurrencyInfo";
import { useAccount } from "wagmi";
import BuySuccess from "./BuySuccess";
import Buy from "./Buy";

export default function BuyModal({ children }) {
    const { address } = useAccount();
    const [buySuccess, setBuySuccess] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [collection, setCollection] = useState(null);
    const [bundle, setBundle] = useState(null);

    const openMenu = () => {
        setMenuOpen(true);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    const updateBundle = (collection, bundle) => {
        setBundle(bundle);
        setCollection(collection);
    }

    const buySuccessful = () => {
        setBuySuccess(true);
    }

    return (
        <BuyModalContext.Provider value={{menuOpen, openMenu, closeMenu, updateBundle}}>
            {children}
            <div className={`fixed top-0 w-screen h-screen flex justify-center items-end md:items-center z-20 ${!menuOpen && "invisible" }`}>
                <div onClick={closeMenu} className={`absolute top-0 w-full h-full bg-black smooth ${menuOpen ? "opacity-50" : "opacity-0"}`} />
                {buySuccess ? 
                    <BuySuccess menuOpen={menuOpen} closeMenu={closeMenu} collection={collection} />
                :
                    <Buy menuOpen={menuOpen} closeMenu={closeMenu} address={address} collection={collection} bundle={bundle} buySuccessful={buySuccessful} /> 
                }
            </div>
        </BuyModalContext.Provider>
    )
}
