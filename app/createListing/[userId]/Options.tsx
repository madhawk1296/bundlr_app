'use client';

import { useState } from "react";
import Sort from "./Sort";
import SortContext from "../../../components/hooks/SortContext";


export default function Options({ children }) {
    const [sort, setSort] = useState({value: "name", title: "Name"})
    const [isAscending, setIsAscending] = useState(true)

    const changeSort = (value) => {
        setSort(value);
    }

    const toggleDirection = () => {
        setIsAscending(!isAscending);
    }

    return (
        <SortContext.Provider value={{sort, changeSort, isAscending, toggleDirection}}>
            <div className='relative w-full h-[50px] flex gap-6 py-[5px]'>
                <Sort sort={sort} setSort={setSort} isAscending={isAscending} setIsAscending={setIsAscending} />
            </div>
            {children}
        </SortContext.Provider>
    )
}