import Link from "next/link";

export default function NavOption({ title, link, active }) {
    return (
        <Link href={link}>
            <h1 className={`w-fit text-md font-semibold smooth ${active ? "text-gray-800" : "text-gray-400"} px-[10px]`}>{title}</h1>
        </Link>
    )
}