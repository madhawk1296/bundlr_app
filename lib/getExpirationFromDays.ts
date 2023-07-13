export default function getExpirationFromDays(days) {
    // Convert expires from days to seconds and then to an expiration timestamp
    const SECONDS_IN_A_DAY = 86400;
    const currentTimestamp = Math.floor(Date.now() / 1000); // Convert from milliseconds to seconds
    return currentTimestamp + (days * SECONDS_IN_A_DAY);
}