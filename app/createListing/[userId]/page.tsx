import Collections from './Collections';
import Options from './Options';
import getOrUpdateUserCollections from '../../../lib/getOrUpdateUserCollections';
import getOrUpdateCurrencies from '../../../lib/getOrUpdateCurrencies';
import filterUserCollections from '../../../lib/filterUserCollections';

export default async function Page({ params: { userId } }) {
    const user = await getOrUpdateUserCollections(userId);

    // get currencies
    const currencies = await getOrUpdateCurrencies();

    // hide collections with no image
    const collections = user && filterUserCollections(user);

    return (
        <div className="relative w-full flex flex-col gap-2">
            <Options>
                <Collections userId={userId} currencies={currencies} collections={collections} />
            </Options>
        </div>
    )
}