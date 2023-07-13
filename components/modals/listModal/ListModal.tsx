import { useState } from "react"
import ListModalContext from "../../hooks/ListModalContext";
import getCurrencyInfo from "../../../lib/getCurrencyInfo";
import { useAccount } from "wagmi";
import List from "./List";
import ListingSuccess from "./ListingSuccess";

export default function ListModal({ children }) {
    const { address } = useAccount();
    const [listingSuccess, setListingSuccess] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [collection, setCollection] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [currency, setCurrency] = useState(getCurrencyInfo("magic"));
    const [expires, setExpires] = useState(30);
    const total = selectedItems.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0);

    const openMenu = () => {
        setMenuOpen(true);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    const updateSelectedItems = (collection, items, currency) => {
        setCollection(collection);
        setSelectedItems(items);
        setCurrency(currency);
    }

    const changeExpires = (e) => {
        setExpires(e);
    }

    const listingSuccessful = () => {
        setListingSuccess(true);
    }

    return (
        <ListModalContext.Provider value={{menuOpen, openMenu, closeMenu, updateSelectedItems}}>
            {children}
            <div className={`fixed top-0 w-screen h-screen flex justify-center items-end md:items-center z-20 ${!menuOpen && "invisible" }`}>
                <div onClick={closeMenu} className={`absolute top-0 w-full h-full bg-black smooth ${menuOpen ? "opacity-50" : "opacity-0"}`} />
                {listingSuccess ? 
                    <ListingSuccess menuOpen={menuOpen} closeMenu={closeMenu} collection={collection} />
                :
                    <List menuOpen={menuOpen} closeMenu={closeMenu} address={address} collection={collection} selectedItems={selectedItems} currency={currency} total={total} expires={expires} changeExpires={changeExpires} listingSuccessful={listingSuccessful} /> 
                }
            </div>
        </ListModalContext.Provider>
    )
}