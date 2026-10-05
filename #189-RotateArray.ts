// best for interview

/* Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4] */

function rotate(nums: number[], k: number): void {
    const n = nums.length;

    k %= n;

    if (k === 0) return;

    // 1. Reverse entire array
    let left = 0;
    let right = n - 1;

    while (left < right) {
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;

        left++;
        right--;
    }

    // 2. Reverse first k elements
    left = 0;
    right = k - 1;

    while (left < right) {
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;

        left++;
        right--;
    }

    // 3. Reverse remaining elements
    left = k;
    right = n - 1;

    while (left < right) {
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;

        left++;
        right--;
    }
}

//second approch but not use

function rotate1(nums: number[], k: number): void {
    const n = nums.length;
    k %= n;

    let count = 0;
    let start = 0;

    while (count < n) {
        let current = start;
        let prev = nums[current];

        do {
            const next = (current + k) % n;
            [nums[next], prev] = [prev, nums[next]];
            current = next;
            count++;
        } while (current !== start);

        start++;
    }
}