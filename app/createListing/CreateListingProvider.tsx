'use client';

import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useRouter } from 'next/navigation'
import { useConnectModal } from '@rainbow-me/rainbowkit';

export default function CreateListingProvider({ children }) {
    const [walletAddress, setWalletAddress] = useState(null);
    const { address } = useAccount();
    const pathname = usePathname();
    const section = pathname.split('/');
    const userId = section[2];
    const walletMatches = userId == address;
    const router = useRouter()
    const { openConnectModal } = useConnectModal();

    useEffect(() => {
        if (walletAddress !== address) {
            setWalletAddress(address);
        }

        if (!walletMatches) {
            router.replace(`/createListing/${address}`);
        }
    }, [address])

    return walletAddress ? (
        children
    ) : (
        <div className="relative w-full h-[400px] flex justify-center items-center">
            <button onClick={openConnectModal} className="px-[10px] py-[7px] border-2 border-gray-200 rounded-xl text-md font-semibold text-gray-800 transition-all duration-200 shadow-sm hover:shadow hover:bg-gray-50">Connect wallet to list items</button>
        </div>
    )
}