export default function Metadata({ subject, value}) {
    return (
        <div className="relative w-fit flex gap-2 items-center">
            <h1 className="text-lg font-medium text-gray-700">{subject}</h1>
            <h1 className="text-lg font-bold text-gray-700">{value}</h1>
        </div>
    )
}