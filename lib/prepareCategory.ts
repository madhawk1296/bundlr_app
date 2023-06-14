import capitalizeTitle from "./capitalizeTitle";

export default function prepareCategory(category) {
    switch (category) {
        case 'pfps':
            return 'PFPs';
        case 'virtual-worlds':
            return 'Metaverse';
        default:
            return capitalizeTitle(category);
    }
}