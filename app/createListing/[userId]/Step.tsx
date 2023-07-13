'use client';

import Link from "next/link";
import useHover from "../../../components/hooks/useHover"
import One from "../../../components/icons/One";
import Two from "../../../components/icons/Two";

export default function Step({ value, title, active, link=null }) {

    const content = (
        <div className={`h-full flex gap-2 items-center border-b-2 transition-all duration-200 ${active ? "border-gray-700" : "border-transparent"}`}>
            <div className="relatve h-[60%]">
                {value == 1 ? <One active={active} /> : <Two active={active} />}
            </div>
            <h1 className={`text-sm md:text-lg font-bold transition-all duration-200 ${active ? "text-gray-700" : "text-gray-400"}`}>{title}</h1>
        </div>
    )

    return value == 1 ? (
        <Link href={`/createListing/${link}`}>
            {content}
        </Link>
    ) : content
}