import exp from "constants";
import fromEtherToWei from "./fromEtherToWei";
import getExpirationFromDays from "./getExpirationFromDays";

export default function getBuyBundleArgs(bundle) {
    const { bundleId, expirationTime, paymentToken, prices, seller, collection } = bundle || {};

    return [
        seller?.address,
        collection?.address,
        bundleId,
        paymentToken,
        prices,
        false
    ]
}