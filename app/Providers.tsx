'use client';

import '@rainbow-me/rainbowkit/styles.css';

import {
  RainbowKitProvider, getDefaultWallets
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import Modals from '../components/modals/Modals';
import MobileProvider from '../components/MobileProvider';
 
const { chains, publicClient } = configureChains(
  [arbitrum],
  [alchemyProvider({ apiKey: "m5WYo8Dccvclf9HaNyThDsd0l6T6zBKf" })],
)

const { connectors } = getDefaultWallets({
  appName: 'Bundlr',
  projectId: '80e8552a7f8ffbee32d1521d2750b99b',
  chains
});

const config = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
})

export default function Providers({ children }) {
    return (
        <WagmiConfig config={config}>
          <RainbowKitProvider chains={chains}>
              <MobileProvider>
                <Modals>
                  {children}
                </Modals>
              </MobileProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      );
}