export default function collectionNotHidden(address) {
    const hiddenCollections = [
        "0x6325439389e0797ab35752b4f43a14c004f22a9c",
        "0xe83c0200e93cb1496054e387bddae590c07f0194",
        "0x658365026d06f00965b5bb570727100e821e6508"
    ];

    return !hiddenCollections.includes(address);
}