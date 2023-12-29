function bubbleSort(arr) {
  const n = arr.length;

  // Iterate through the entire array
  for (let i = 0; i < n - 1; i++) {
    // Last i elements are already sorted, so we don't need to check them
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare adjacent elements and swap them if they are in the wrong order
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Example usage:
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = bubbleSort(unsortedArray);

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
