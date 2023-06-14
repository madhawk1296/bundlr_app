import fromWeiToEther from "./fromWeiToEther";

export default function getHighestVolumeCollections(collections, amount) {
    return collections.sort((a, b) => {
        const aVolume = a.volumes[0]?.volume || 0;
        const bVolume = b.volumes[0]?.volume || 0;

        return bVolume - aVolume;
    }).slice(0, amount);
}