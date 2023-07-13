'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import formatNumber from '../lib/formatNumber';
import WalletIcon from '../components/icons/Wallet';
import WalletConnected from './WalletConnected';
import { useContext } from 'react';
import MobileContext from '../components/hooks/MobileContext';

export default function Wallet() {   
    const { isMobile } = useContext(MobileContext);
    
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted
                const connected =
                ready &&
                account &&
                chain;

                return (
                <div className='relative border-2 border-gray-200 rounded-xl px-[7px] md:min-w-[130px] h-[40px] text-sm font-semibold text-gray-700 cursor-pointer hover:shadow-sm'>
                    {(() => {
                    if (!connected) {
                        return (
                        <button className='w-full h-full flex gap-2 justify-center items-center'  onClick={openConnectModal} type="button">
                            Connect<span className='hidden md:flex flex-inline'> Wallet</span>
                        </button>
                        );
                    }

                    if (chain.unsupported) {
                        return (
                        <button className='w-[60px] md:w-full h-full md:text-base text-xs truncate' onClick={openChainModal} type="button">
                            {isMobile ? "Network!" : "Wrong network"}
                        </button>
                        );
                    }

                    return (
                        <WalletConnected account={account} />
                    );
                    })()}
                </div>
                );
            }}
        </ConnectButton.Custom>
    )
}