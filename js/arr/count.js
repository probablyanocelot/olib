// Data manipulation function to count occurrences of items in an array
function arrItems(arr) {
  const itemCount = {};
  for (const item of arr) {
    if (itemCount[item]) {
      itemCount[item]++;
    } else {
      itemCount[item] = 1;
    }
  }
  return itemCount;
}
