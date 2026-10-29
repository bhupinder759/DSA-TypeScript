/*
Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

Example 1:

Input: nums = [10,2]
Output: "210"
Example 2:

Input: nums = [3,30,34,5,9]
Output: "9534330"
*/

function largestNumber(nums: number[]): string {
    const arr = nums.map(num => num.toString());

    arr.sort((a, b) => {
        if (a + b > b + a) return -1;
        if (a + b < b + a) return 1;
        return 0;
    });

    if (arr[0] === "0") return "0";

    return arr.join('');
}