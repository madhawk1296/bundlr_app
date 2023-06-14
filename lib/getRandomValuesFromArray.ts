export default function getRandomValuesFromArray(array, count) {
    const shuffledArray = array.slice(); // Make a copy of the original array
    let currentIndex = shuffledArray.length;
    let temporaryValue, randomIndex;
  
    // While there are elements remaining to shuffle
    while (currentIndex !== 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // Swap it with the current element
      temporaryValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temporaryValue;
    }
  
    // Return the first 'count' elements from the shuffled array
    return shuffledArray.slice(0, count);
  }