import TrendingRow from "./TrendingRow";

export default function TrendingColumn({ collections }) {
    return (
        <div className="relative w-full h-full flex flex-col gap-2 overflow-hidden">
            <div className="relative w-full h-[40px] flex justify-evenly items-center">
                <h1 className='w-full min-w-[50%] font-medium text-md text-gray-500'>Collection</h1>
                <h1 className='w-full text-center font-medium text-md text-gray-500'>Floor Price</h1>
                <h1 className='w-full text-center font-medium text-md text-gray-500'>Volume</h1>
            </div>
            <div className="relative w-full flex flex-col gap-6">
                {collections.map((collection, index) => <TrendingRow collection={collection} key={index} />)}
            </div>
        </div>
    )
}