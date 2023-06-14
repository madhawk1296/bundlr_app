import Link from 'next/link';
import Slider from '../components/home/Slider';
import Trending from '../components/home/Trending';
import getRandomValuesFromArray from '../lib/getRandomValuesFromArray';
import getOrUpdateAllCollections from '../lib/getOrUpdateAllCollections';
import getHighestVolumeCollections from '../lib/getHighestVolumeCollections';
import collectionNotHidden from '../lib/collectionNotHidden';
import CreateListingLink from './CreateListingLink';

export const revalidate = 600; // revalidate this segment every 600 seconds

export default async function Home() {
  const collections = await getOrUpdateAllCollections();

  const filteredCollections = collections.filter(collection => {
    return (collection.imageUrl !== null) && collectionNotHidden(collection.address);
  });

  const sliderCollections = getRandomValuesFromArray(filteredCollections, 40);
  const trendingCollections = getHighestVolumeCollections(filteredCollections, 10);

  return (
    <div className='relative flex flex-col gap-10 pb-[30px]'>
      <Slider collections={sliderCollections} />
      <div className='relative w-full flex flex-col gap-8 justify-center items-center'>
        <div className='relative w-full flex flex-col gap-7 justify-center items-center'>
          <h1 className='text-center font-black tracking-wide text-55xl leading-4 text-[#22A2E3]'>The Marketplace for Bulk Sales</h1>
          <h1 className='w-fit text-center font-black tracking-wide text-5xl text-gray-700 inline-block'>On Arbitrum</h1>
        </div>
        <CreateListingLink />
      </div>
      <Trending collections={trendingCollections} /> 
    </div>
  )
}
