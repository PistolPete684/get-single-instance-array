function stray(numbers) {
  //Setup a freuncy map
  const frequencyMap = {}
  //Check if there is an instance of the num already in the map and if not start at 0
  //Then add 1 to the count
  numbers.forEach(num => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });
  
  //Find the entry with only one instnace recorded & return it
  for (const [key, value] of Object.entries(frequencyMap)) {
    if (value === 1) {
      return Number(key);
    }
  }
  //Return null if no case of only one instnace recorded
  return null;
}