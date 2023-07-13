'use client'

import { useContext } from "react";
import MobileContext from "../hooks/MobileContext";
import TrendingColumn from "./TrendingColumn";

export default function Trending({ collections }) {
    const { isMobile } = useContext(MobileContext);

    return (
        <div className="relative w-full h-full flex flex-col gap-2 px-[15px] md:px-[30px]">
            <div className="relative w-full flex justify-between">
                <div className='h-full flex gap-2 items-center gap-3'>
                    <h1 className='font-bold text-3xl text-gray-600'>Popular</h1>
                </div>
                <div className='hidden h-full md:flex items-center gap-5'>
                    <h1 className='font-bold text-2xl text-gray-600'>All Time</h1>
                </div>
            </div>
            <div className="relative w-full h-full grid md:grid-cols-2 gap-10">
                <TrendingColumn collections={collections.slice(0,(isMobile ? 10 : 5))} />
                {!isMobile && <TrendingColumn collections={collections.slice(5,10)} />}
            </div>
        </div>
    )
}