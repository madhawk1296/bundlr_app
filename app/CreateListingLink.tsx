'use client';

import Link from "next/link";
import { useAccount } from "wagmi";

export default function CreateListingLink() {
    const { address } = useAccount();

    return (
        <Link href={`/createListing/${address ? address : null}`}>
            <button className='w-[200px] h-[50px] bg-[#22A2E3] text-white font-bold text-xl rounded-xl mx-auto shadow-black hover:shadow-md'>Create a Listing</button>
        </Link>
    )
}