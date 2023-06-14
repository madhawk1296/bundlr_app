export default function TokenId({ tokenId }) {
    return (
        <div className="absolute w-fit top-[5%] right-[5%] h-[25px] flex items-center bg-transparent">
            <h1 className='font-semibold text-sm text-white tracking-wide px-[5px] z-10'># {tokenId}</h1>
            <div className="absolute w-full h-full bg-black opacity-[60%] rounded-md z-0"></div>
        </div>  
    )
}