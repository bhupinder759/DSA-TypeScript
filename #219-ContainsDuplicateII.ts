/* 
Given an integer array nums and an integer k, return true if there are two distinct 
indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
*/

//best fast approch

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const window = new Set<number>();
  //sliding window
  for (let i = 0; i < nums.length; i++) {
    if (window.has(nums[i])) return true;

    window.add(nums[i]);

    if (window.size > k) {
      window.delete(nums[i - k]);
    }
  }

  return false;
}

//second
// for explation but use extra space

function containsNearbyDuplicate1(nums: number[], k: number): boolean {
  if (k === 0) return false;
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      const distance = i - seen.get(nums[i])!;

      if (distance <= k) return true;
    }

    seen.set(nums[i], i);
  }

  return false;
}
