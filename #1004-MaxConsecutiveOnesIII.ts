/* 
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in 
the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
*/

function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let zeroCount = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        // Hint 1: Agar current element 0 hai...
        if (nums[right] === 0) zeroCount++;

        // Hint 2: Jab zeroCount > k ho...
        while (zeroCount > k) {
            if (nums[left] === 0) zeroCount--;
            left++;
        }

        // Hint 3: Current valid window ki length nikalo...
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};