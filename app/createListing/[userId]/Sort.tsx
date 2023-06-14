import { useRef, useState } from "react";
import LongArrow from "../../../components/icons/LongArrow";
import clickOutside from "../../../components/hooks/clickOutside";
import SortOption from "./SortOption";

export default function Sort({ sort, setSort, isAscending, setIsAscending }) {
    const sortOptions = [
        {
            value: "name",
            title: "Name",
        },
        {
            value: "floor_price",
            title: "Floor Price"
        },
        ,{
            value: "owned",
            title: "Owned"
        }
    ]

    const [sortMenu, setSortMenu] = useState(false)
    const sortMenuRef = useRef(null);

    const handleSelectSort = (sort) => {
        setSort(sort);
        handleCloseSortMenu();
    }

    const handleToggleAscending = () => {
        setIsAscending(!isAscending);
    }

    const handleOpenSortMenu = () => {
        setSortMenu(true);
    }

    const handleCloseSortMenu = () => {
        setSortMenu(false);
    }

    // Close sort menu when clicking outside
    clickOutside(sortMenuRef, sortMenu, handleCloseSortMenu);

    return (
        <div className='relative w-fit h-full'>
            <div className='relative w-full h-full overflow-hidden flex gap-[2px] items-center border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-200 hover:shadow-sm'>
                <div onClick={handleOpenSortMenu} className='relative min-w-[105px] w-fit h-full flex justify-evenly items-center gap-2 px-[7px] bg-white cursor-pointer transition-all duration-200 hover:bg-gray-100'>
                    <h1 className='w-fit font-medium text-sm text-gray-700 flex justify-self-start'>Sort:</h1>
                    <div className="w-full flex justify-center">
                        <h1 className="w-fit font-semibold text-sm text-gray-700">{sort.title}</h1>
                    </div>
                </div>
                <div onClick={handleToggleAscending} className={`relative w-fit h-full px-[7px] py-[9px] bg-white cursor-pointer ${!isAscending && "rotate-180"}`}>                    
                    <LongArrow />
                </div>
            </div>
            <div ref={sortMenuRef} className={`absolute mt-[7px] w-fit min-w-[100px] border-2 border-gray-200 rounded-xl overflow-hidden z-20 bg-white transition-all duration-200 flex flex-col ${sortMenu ? "opacity-100" : "opacity-0 invisible"}`}>   
                {sortOptions.map((option, index) => <SortOption key={index} option={option} onSelect={handleSelectSort} />)}
            </div>
        </div>
    )
}