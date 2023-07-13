import ExpireOption from "./ExpireOption"

export default function Expires({ expires, changeExpires }) {
    const handleExpires = (e) => {
        changeExpires(e.target.value);
    }

    return (
        <div className="w-full common-border flex justify-between items-center py-[10px] px-[20px]">
            <h1 className="text-base font-semibold text-gray-700">Expires</h1>
            <select onChange={handleExpires} value={expires} className="text-right text-sm font-medium text-gray-700 cursor-pointer border-2 rounded-md px-[4px] py-[2px] bg-gray-100 outline-none w-[110px] smooth hover:shadow-sm">
                <ExpireOption value={1} title="1 Day" />
                <ExpireOption value={7} title="1 Week" />
                <ExpireOption value={14} title="2 Weeks" />
                <ExpireOption value={30} title="1 Month" />
                <ExpireOption value={60} title="2 Months" />
                <ExpireOption value={90} title="3 Months" />
            </select>
        </div>
    )
}