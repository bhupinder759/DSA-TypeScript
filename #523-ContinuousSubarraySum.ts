/* 
Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

A good subarray is a subarray where:

its length is at least two, and
the sum of the elements of the subarray is a multiple of k.
Note that:

A subarray is a contiguous part of the array.
An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
 

Example 1:

Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
*/


function checkSubarraySum(nums: number[], k: number): boolean {
    const indexMap = new Map<number, number>();
    indexMap.set(0, -1);

    let remainder = 0;

    for (let i = 0; i < nums.length; i++) {
        remainder = (remainder + nums[i]) % k;

        if (indexMap.has(remainder)) {
            if (i - indexMap.get(remainder)! >= 2) {
                return true;
            }
        } else {
            indexMap.set(remainder, i);
        }
    }

    return false;
}