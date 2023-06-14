import { useState } from "react"
import ListModalContext from "../../hooks/ListModalContext";
import Item from "../../listItems/Item";
import Total from "../../listItems/Total";
import getCurrencyInfo from "../../../lib/getCurrencyInfo";
import Detail from "./Detail";
import formatPercent from "../../../lib/formatPercent";
import formatNumber from "../../../lib/formatNumber";

export default function ListModal({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [currency, setCurrency] = useState(getCurrencyInfo("magic"));

    const openMenu = () => {
        setMenuOpen(true);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    const updateSelectedItems = (items, currency) => {
        setSelectedItems(items);
        setCurrency(currency);
    }

    const total = selectedItems.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0);
    const platformShare = 0.025;
    const platformFee = total * platformShare;
    const sellerShare = 1 - platformShare;
    const sellerTotal = total * sellerShare;

    return (
        <ListModalContext.Provider value={{menuOpen, openMenu, closeMenu, updateSelectedItems}}>
            {children}
            <div className={`fixed top-0 w-screen h-screen flex justify-center items-center z-20 ${!menuOpen && "invisible" }`}>
                <div onClick={closeMenu} className={`absolute top-0 w-full h-full bg-black smooth ${menuOpen ? "opacity-50" : "opacity-0"}`} />
                <div className={`relative bg-white rounded-xl w-[500px] max-h-[700px] relative flex flex-col py-[20px] px-[20px] overflow-scroll ${!menuOpen && "opacity-0"}`}>
                    <button onClick={closeMenu} className="flex self-end font-bold h-[35px] aspect-square border-2 border-gray-200 text-gray-600 rounded-full justify-center items-center leading-none">X
                    </button>
                    <div className="relative w-full flex flex-col gap-4">
                        <h1 className="text-center text-2xl font-semibold text-gray-700">List Items</h1>
                        <div className="relative w-full flex flex-col gap-2 px-[20px] py-[10px] common-border">
                            <div className="relative w-full flex flex-col gap-4">
                                {selectedItems.map((item, index) => <Item key={index} item={item} currency={currency} />)}
                            </div>
                            <Total currency={currency} total={total} />
                        </div>
                        <div className="w-full common-border flex justify-between items-center py-[10px] px-[20px]">
                            <h1 className="text-base font-semibold text-gray-700">Expires</h1>
                            <select className="text-right text-sm font-medium text-gray-700 cursor-pointer border-2 rounded-md px-[4px] py-[2px] bg-gray-100 outline-none w-[110px] smooth hover:shadow-sm">
                                <option>1 Day</option>
                                <option>1 Week</option>
                                <option>2 Weeks</option>
                                <option>1 Month</option>
                                <option>3 Months</option>
                                <option>6 Months</option>
                            </select>
                        </div>
                        <div className="relative w-full flex flex-col gap-2 px-[20px] ">
                            <Detail title="Total" value={total} />
                            <Detail title={`Creator Fee()`} value={10} />
                            <Detail title={`Platform Fee(${formatPercent(platformShare)})`} value={formatNumber(platformFee)} />
                            <Detail title={`Your Share(${formatPercent(sellerShare)})`} value={formatNumber(sellerTotal)} />
                        </div>
                        <div className="relative w-full py-[10px] flex justify-center">
                            <button className="py-[10px] px-[15px] rounded-xl bg-blue-500 text-white font-semibold" >Create Listing</button>
                        </div>
                    </div>
                </div>
            </div>
        </ListModalContext.Provider>
    )
}