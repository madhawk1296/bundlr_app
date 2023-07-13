export default function getCreatorFee(total, royalties=[]) {
    const totalRoyalty = royalties.reduce((acc, royalty) => acc + Number(royalty.amount), 0);
    const share = totalRoyalty / total;

    return [share, totalRoyalty]
}