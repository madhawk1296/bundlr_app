import Image from "next/image";
import gatherTokens from "../lib/gatherTokens";
import getImage from "../lib/getImage";

export default async function BundleImage({ collectionId, items }) {
    const tokens = await gatherTokens(collectionId, items);
    const images = tokens.map(token => token?.image_url);

    return (
        <Image alt={`Bundle Image`} src={getImage(images[0])} height={200} width={200} />
    )
}