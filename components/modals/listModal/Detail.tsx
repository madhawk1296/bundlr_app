export default function Detail({ title, value }) {
    return (
        <div className="relative w-full flex justify-between items-center">
            <h1 className="text-sm font-medium text-gray-600">{title}</h1>
            <h1 className="text-sm font-medium text-gray-600">{value}</h1>
        </div>
    )
}