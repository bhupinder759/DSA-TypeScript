/* 
You are given an integer array nums of length n and an integer target.
Find three integers at distinct indices in nums such that the sum is closest to target.
Return the sum of the three integers.
You may assume that each input would have exactly one solution.

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let closest = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            // Update closest sum
            if (Math.abs(target - sum) < Math.abs(target - closest)) {
                closest = sum;
            }

            // Exact target found
            if (sum === target) {
                return sum;
            }

            // Move pointers
            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closest;
}
