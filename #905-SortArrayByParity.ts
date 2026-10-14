/* 
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

 

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/

function sortArrayByParity(nums: number[]): number[] {
     let i = 0;
     let j = 0;

     while(j <= nums.length -1) {
        if(nums[j] % 2 === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j++;
        } else {
            j++;
        }
     }

     return nums;

};

// Opposite-direction two pointers

function sortArrayByParity1(nums: number[]): number[] {
    let left = 0;
    let right = nums.length - 1;
while (left < right) {
    if (nums[left] % 2 === 0) {
        left++;
    } else if (nums[right] % 2 !== 0) {
        right--;
    } else {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

return nums;
}