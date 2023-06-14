import Search from '../components/icons/Search'
import Image from 'next/image'
import Link from 'next/link'
import Wallet from './Wallet'

export default function Header() {
    return (
        <div className='sticky z-10 top-0 w-full h-[70px] bg-white shadow-sm shadow-gray-200 px-[30px] flex justify-between items-center'>
            <Link href="/">
              <div className='flex gap-2 items-center cursor-pointer'>
                  <Image alt='Bundlr Logo' src='/logo.png' width={40} height={40}  />
                  <Image alt='Bundlr Name' src='/brand_name.png' width={85} height={20} />
              </div>
            </Link>
            <div className='w-[600px] h-[40px] rounded-xl border-2 border-gray-200 flex gap-2 items-center px-[7px] cursor-text hover:shadow-sm'>
                <Search />
                <h1 className='text-gray-400'>Search collections, bundles, and items</h1>
            </div>
            <Wallet />
        </div>
    )
}