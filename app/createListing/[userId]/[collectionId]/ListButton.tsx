export default function ListButton({ handleList, itemsExist, total }) {
    const disabled = !itemsExist || total <= 0;

    return (
        <button onClick={handleList} disabled={disabled} className={`w-fit font-semibold rounded-lg text-white px-[10px] py-[5px] transition-all duration-200 hover:shadow-md ${disabled ? "bg-blue-300" : "bg-blue-500"}`} >List Items</button>
    )
}