/* 
Given an integer array nums and an integer k, split nums into k non-empty subarrays such 
that the largest sum of any subarray is minimized.

Return the minimized largest sum of the split.

A subarray is a contiguous part of the array.

 

Example 1:

Input: nums = [7,2,5,10,8], k = 2
Output: 18
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.
*/

function splitArray(nums: number[], k: number): number {
    let low = 0;
    let high = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > low) {
            low = nums[i];
        }
        high += nums[i];
    }

    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);

        let parts = 1;
        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
            if (sum + nums[i] > mid) {
                parts++;
                sum = nums[i];

                // No need to check further
                if (parts > k) break;
            } else {
                sum += nums[i];
            }
        }

        if (parts <= k) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
}
