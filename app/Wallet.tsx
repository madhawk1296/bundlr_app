'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import formatNumber from '../lib/formatNumber';
import WalletIcon from '../components/icons/Wallet';

export default function Wallet() {     
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
                <div className='relative border-2 border-gray-200 rounded-xl min-w-[130px] h-[40px] text-sm font-semibold text-gray-700 cursor-pointer hover:shadow-sm'>
                    {(() => {
                    if (!connected) {
                        return (
                        <button className='w-full h-full'  onClick={openConnectModal} type="button">
                            Connect Wallet
                        </button>
                        );
                    }

                    if (chain.unsupported) {
                        return (
                        <button className='w-full h-full' onClick={openChainModal} type="button">
                            Wrong network
                        </button>
                        );
                    }

                    return (
                        <div className='flex flex-inline justify-center items-center gap-2 h-full w-full' onClick={openAccountModal}>
                            <h1>
                                {formatNumber(account.balanceFormatted, true)} ETH
                            </h1>
                            <div className='relative w-[22px]'>
                                <WalletIcon />
                            </div>
                        </div>
                    );
                    })()}
                </div>
                );
            }}
        </ConnectButton.Custom>
    )
}