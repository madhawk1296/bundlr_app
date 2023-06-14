import TrendingColumn from "./TrendingColumn";

export default function Trending({ collections }) {
    return (
        <div className="relative w-full h-full flex flex-col gap-2 px-[30px]">
            <div className="relative w-full flex justify-between">
                <div className='h-full flex gap-2 items-center gap-3'>
                    <h1 className='font-bold text-3xl text-gray-600'>Popular</h1>
                </div>
                <div className='h-full flex items-center gap-5'>
                    <h1 className='font-bold text-2xl text-gray-600'>All Time</h1>
                </div>
            </div>
            <div className="relative w-full h-full grid grid-cols-2 gap-10">
                <TrendingColumn collections={collections.slice(0,5)} />
                <TrendingColumn collections={collections.slice(5,10)} />
            </div>
        </div>
    )
}