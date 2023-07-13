'use client';

import { usePathname } from "next/navigation";
import NavOption from "./NavOption";

export default function Nav({ userId }) {
    const url = `/user/${userId}`

    const pathname = usePathname()
    const section = pathname.split("/")[3]

    return (
        <div className="relative w-full py-[15px] border-b-2 flex gap-4">
            <NavOption title="Listings" link={`${url}/listings`} active={section === "listings"} />
            <NavOption title="Sales" link={`${url}/sales`} active={section === "sales"} />
        </div>
    )
}