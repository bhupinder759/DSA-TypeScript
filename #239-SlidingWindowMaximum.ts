/* 
You are given an array of integers nums, there is a sliding window of size k which is 
moving from the very left of the array to the very right. You can only see the k numbers in the window. 
Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
*/

function maxSlidingWindow(nums: number[], k: number): number[] {
    const n = nums.length;
    const result: number[] = [];

    // Circular deque storing indices
    const deque = new Int32Array(k);

    let head = 0;
    let size = 0;

    for (let i = 0; i < n; i++) {

        // 1. Remove indices outside current window
        while (size > 0 && deque[head] <= i - k) {
            head = (head + 1) % k;
            size--;
        }

        // 2. Remove smaller or equal elements from back
        while (size > 0) {
            const back = (head + size - 1) % k;

            if (nums[deque[back]] <= nums[i]) {
                size--;
            } else {
                break;
            }
        }

        // 3. Add current index
        const tail = (head + size) % k;
        deque[tail] = i;
        size++;

        // 4. Add maximum when window is complete
        if (i >= k - 1) {
            result.push(nums[deque[head]]);
        }
    }

    return result;
}
