import Header from './Header'
import Providers from './Providers'
import './globals.css'

export const metadata = {
  title: 'Bundlr - Buy in Bulk, Save in Bulk',
  description: 'Discover Bundlr, the top NFT marketplace for bundled NFTs. Invest in diverse digital art & collectibles from leading artists. Join Bundlr today!',
}

export default function RootLayout({
  children,
  header,
  footer
}: {
  children: React.ReactNode,
  header: React.ReactNode,
  footer: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <div className='relative w-full h-fit min-h-screen bg-white max-w-screen overflow-hidden'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
