import Image from 'next/image'
import Link from 'next/link'
import Wallet from './Wallet'
import SearchBar from './SearchBar'
import getOrUpdateAllCollections from '../lib/getOrUpdateAllCollections';

export default async function Header() {
    const collections = await getOrUpdateAllCollections();

    return (
        <div className='sticky z-10 top-0 w-full h-[70px] bg-white shadow-sm shadow-gray-200 px-[10px] md:px-[30px] flex justify-between items-center'>
            <Link href="/">
              <div className='relative w-full h-full flex gap-2 items-center cursor-pointer'>
                  <Image alt='Bundlr Logo' src='/logo.png' width={40} height={40}  />
                  <Image className='hidden md:block' alt='Bundlr Name' src='/brand_name.png' width={85} height={20} />
              </div>
            </Link>
            <SearchBar collections={collections} />
            <Wallet />
        </div>
    )
}