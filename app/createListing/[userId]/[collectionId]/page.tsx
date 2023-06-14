import Summary from './Summary';
import CollectionInfo from './CollectionInfo';
import getOrUpdateCollection from '../../../../lib/getOrUpdateCollection';
import getOrUpdateUserItems from '../../../../lib/getOrUpdateUserItems';
import gatherCurrencies from '../../../../lib/gatherCurrencies';
import Items from './Items';
import ListItemsProvider from './ListItemsProvider';
import getOrUpdateCurrencies from '../../../../lib/getOrUpdateCurrencies';

export default async function Page({ params: { userId, collectionId }}) {
    const collection = await getOrUpdateCollection(collectionId);
    const items = await getOrUpdateUserItems(userId, collectionId);

    // currency info
    const currencies = await getOrUpdateCurrencies();

    return (
        <ListItemsProvider>
            <div className="w-full flex gap-3 justify-evenly">
                <div className="w-full flex flex-col gap-6">
                    <CollectionInfo currencies={currencies} collection={collection} />
                    <Items currencies={currencies} collection={collection} items={items} />
                </div>
                <Summary />
            </div>
        </ListItemsProvider>
    )
}