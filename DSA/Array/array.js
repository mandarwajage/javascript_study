/*
Find non duplicate element in an array.
Write a function that takes an array of integers as input and returns the non-duplicate element in the array. It is guaranteed that there is exactly one element that does not have a duplicate in the array.

Example1
Input:
5,2,3,2,5
Output:
3
Explanation:
The function should return the non-duplicate element in the array */

function findNonDuplicateElement(arr) {
  // PLACEHOLDER_JAVASCRIPT_FIND_NON_DUPLICATE_ELEMENT_BODY
   let ab = arr.filter((a) => arr.indexOf(a) == arr.lastIndexOf(a));
   return ab[0];
}

findNonDuplicateElement([1,2,3,2,1]);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~